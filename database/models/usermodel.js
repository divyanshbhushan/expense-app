const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    googleID: {
        type: String,
        unique: true,
    },
    profileImage: {
        type: String,
        default: "defaultprofileimage.webp",
    },
    fullName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    expenseList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Expense",
        },
    ],
    authMethod: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    authDate: {
        type: String,
        default: new Date(Date.now()).toString()
    }
});

userModel.plugin(passportLocalMongoose);

const User = mongoose.model("User", userModel);

module.exports = User;
