const router = require('express').Router();
const passport = require('passport');
require('../configs/passport.config')


// Auth login
router.get('/login', (req, res) => {
    res.render('login');
});

// auth withh google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));


// callback route for google to redirect to; redirect/callback url
router.get('/google/redirect',
    passport.authenticate('google'), (req, res) => {
        res.send('You have gone through google passport')
    })

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('Logging out with passport')
})


module.exports = router