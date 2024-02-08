const mongoose = require('mongoose');

const expenseModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    date: {
        type: String,
    },
    via:{
        type: String,
    },
    currency: {
        type: String,
    }
})

const Expense = mongoose.model("Expense", expenseModel);
module.exports = Expense;