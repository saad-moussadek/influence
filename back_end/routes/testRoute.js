var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

let User = require('../config/config').mongooseSchemas.User;

//FOR TESTING PURPOSES
//This should not work if the user is not logged in !
router.get('/findMe', function (req, res) {
    User.find({email: req.headers.email}, function (err, doc) {
        res.json(doc);
    });
});

module.exports = router;
