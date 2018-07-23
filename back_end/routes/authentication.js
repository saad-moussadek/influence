let express = require('express');
let router = express.Router();
let jsonWebToken = require('jsonwebtoken');
let mongoose = require('mongoose');
let bcrypt = require('bcrypt');
let emailValidator = require('email-validator');

let config = require('../config/config');
mongoose.connect(config.databaseURL);

let User = config.mongooseSchemas.User;

//FOR TESTING PURPOSES
router.get('/allUsers', function (req, res) {
    User.find({}, function (err, doc) {
        res.json(doc);
    });
});

//FOR TESTING PURPOSES
router.post('/deleteAllUsers', function (req, res) {
    User.find({}).remove().exec(function () {
        res.json();
    });
});

router.post('/signIn', function (req, res) {
    if (req.body.email == null || !emailValidator.validate(req.body.email))
        return res.json({error: "invalid email address", success: false});

    if (req.body.password == null || req.body.password.length < 6)
        return res.json({error: "password empty or too short (<6 characters)", success: false});

    var addressExists = false;
    User.find({email: req.headers.email}, function (err, doc) {
        addressExists = doc;
    });
    if (addressExists)
        return res.json({error: "email address already exists", success: false});

    //Will generate salt and hash the password before storing
    bcrypt.hash(req.body.password, config.saltRounds, function (err, hash) {
        //Create a user
        var user = new User({
            email: req.body.email,
            password: hash,
            subscriptionEndDate: null
        });

        //Save the user into the database
        User.create(user, function (err, doc) {
            if (err) {
                res.json({error: "could not create user database entry", success: false});
                return;
            }
            res.json({success: true});
        })
    })
});

router.post('/', function (req, res) {
    //Find the user
    User.findOne({email: req.body.email}, function (err, user) {
        if (err)
            return res.json({error: "could not access database for user lookup", success: false});
        if (!user)
            return res.json({error: "could not find user", success: false});

        //Check if hashed password matches stored hash
        bcrypt.compare(req.body.password, user.password, function (err, passwordsDoMatch) {
            if (!passwordsDoMatch)
                return res.json({error: "wrong password", success: false});

            //If user is found and password is right after hash comparison,
            //Create a token with our payload only (not passing the entire user, as it contains the password)
            const payload = {email: req.body.email};
            var token = jsonWebToken.sign(payload, config.secret, {
                expiresIn: config.JWT_expiryTime //session expiry time
            });
            //Return the token as a cookie to prevent front end from handling its storage
            res.cookie(config.JWT_cookieName, token, {expiry: config.JWT_expiryTime, httpOnly: true});
            res.cookie(config.userID_cookieName, user._id, {expiry: config.JWT_expiryTime, httpOnly: true});
            res.json({token: token, success: true});
        });
    });
});

const ensureAuthentication = function (req, res, next) {
    var token = req.cookies[config.JWT_cookieName];
    if (!token)
        return res.status(403).send({error: "No token provided", success: false});
    jsonWebToken.verify(token, config.secret, function (err, decoded) {
        if (err)
            return res.json({error: "Failed to authenticate token (not logged in, session timeout, or corrupted token)", success: false});

        //If the tokens match, save the decoded token into the request and proceed to the next endpoint lookup
        req.decoded = decoded;
        next();
    });
};

router.post("/logout", function (req, res) {
    res.cookie(config.JWT_cookieName, "null", {expiry: config.JWT_expiryTime, httpOnly: true});
    res.cookie(config.JWT_cookieName, "null", {expiry: config.JWT_expiryTime, httpOnly: true})
    res.json({logOut: true});
});



module.exports = router;
module.exports.ensureAuthentication = ensureAuthentication;
