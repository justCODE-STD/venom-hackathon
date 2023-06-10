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
                return res.status(201).json({
                    message: 'Logged in successfully',
                    data: currentUser
                })
            } else {
                // create new user
                new User({
                    email: profile._json.email,
                    password: 'password',
                    
                    googleId: profile.id
                }).save().then((newUser) => {
                    return res.status(201).json({
                        message: 'Created successfully',
                        data: newUser
                    })
                })
            }
        })

    })
)