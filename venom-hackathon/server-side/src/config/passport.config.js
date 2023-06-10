const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user.model')

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

passport.use(
    new GoogleStrategy({
        // options for the strategy
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/redirect'

    }, (accessToken, refreshToken, profile, done) => {
        // pass call back function
        User.findOne({ googleId: profile.id }).then((currentUser) => {
            if (currentUser) {
                // Already have the user
                console.log('user is: ' + currentUser)

            } else {
                // create new user
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser) => {
                    console.log('new user created: ' + newUser)
                })
            }
        })

    })
)