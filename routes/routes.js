const express = require('express');
const router = express.Router();
const upload = require("../middlewares/multer")
const passport = require('passport');
const userModel = require('../database/models/usermodel');
const isAuthenticated = require('../middlewares/isAuthenticated');
const isUnauthenticated = require('../middlewares/isUnauthenticated');

// GET routes
router.get('/', async (req, res, next)  =>{
  if(req.user){
    return res.render("dashboard");
  }else {
    const user = await userModel.findOne({username:"divyanshbhushan633"}).populate();
    console.log(user)
  res.render('index')}
});


// POST routes
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