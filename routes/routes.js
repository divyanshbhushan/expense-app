const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multer");
const passport = require("passport");
const userModel = require("../database/models/usermodel");
const expModel = require("../database/models/expensemodel");
const isAuthenticated = require("../middlewares/isAuthenticated");
const isUnauthenticated = require("../middlewares/isUnauthenticated");


// Fncs


// GET routes
router.get("/" , async (req, res, next) => {
  const user = await userModel
    .findOne({ username: "divyanshbhushan633" })
    .populate("expenseList");

  res.render("index", {
    login: true,
    admin: user.isAdmin,
    expenseList: user.expenseList
  });
});


// POST routes

router.post('/create', async (req, res, next) => {
  const user = await userModel.findOne({ username: "divyanshbhushan633" });
  const expense = await expModel.create({
    userID: user._id,
    title: req.body.title,
    amount: req.body.amount,
    description: req.body.description,
    via: req.body.via,
    date: req.body.date,
    currency: req.body.currency
  });
  user.expenseList.push(expense);
  await user.save();
  res.redirect('/')
});

// router.post('/createpost', isLoggedIn, upload.single("postImg"), async function(req, res) {
//   const user = await userModel.findOne(req.session.passport._id)
//   const post = await postModel.create({
//     user: user._id,
//     title: req.body.title,
//     description: req.body.description,
//     image: req.file.filename,
//   });
//   user.posts.push(post);
//   await user.save();
//   res.redirect('/profile');
// });



module.exports = router;
