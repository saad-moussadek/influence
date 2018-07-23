let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let UserExport = mongoose.model('User', new Schema({
    email: String,
    password: String,
    subscriptionEndDate: Date,
}));

module.exports = {
    mongooseSchemas: {
        User: UserExport,

    },
    secret: "THISISASECRET",
    databaseURL: "mongodb://localhost:27017",
    saltRounds: 10,
    JWT_expiryTime: 10000,
    JWT_cookieName: "JWT_Cookie",
    userID_cookieName: "userID",
}