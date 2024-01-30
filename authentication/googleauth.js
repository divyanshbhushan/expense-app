const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("../database/models/usermodel");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.AUTH_CALLBACK_URL || "http://localhost:3000/auth/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        const user = await User.findOne({ userId: profile.id });
        if (user) {
          // User found, return it
          return cb(null, user);
        } else if (!user) {
          // User not found, create it
          const newUser = await User.create({
            userId: profile.id,
            email: JSON.stringify(profile),
            username: profile.displayName,
          });
          // Return the new user
          return cb(null, newUser);
        }
      } catch (err) {
        return cb(err);
      }
    }
  )
);

module.exports = passport;
