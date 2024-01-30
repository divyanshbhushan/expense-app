const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userModel = new mongoose.Schema({
    userId: {
        type: String,
        unique: true
    },
    email: {
        type: String,
    },
    username: {
        type: String,
    },
    password: String
})


userModel.plugin(passportLocalMongoose);
userModel.plugin(findOrCreate);

const User = mongoose.model('User', userModel);

module.exports = User;