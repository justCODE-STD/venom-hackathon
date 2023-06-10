const router = require('express').Router();
const passport = require('passport');
require('../configs/passport.config')


// Auth login
router.get('/login', (req, res) => {
    res.render('login');
});

// auth withh google
router.get('/google', passport.authenticate('google', {
    scope: ['email','profile']
}));


// callback route for google to redirect to; redirect/callback url
router.get('/google/redirect',
    passport.authenticate('google'), {
        successRedirect: '/protected',
        failureRedirect: '/auth/failure',
    })

// Handle google auth failure
router.get('/auth/failure', (req, res) => {
    res.send('something went wrong');
});

// Handle google auth success
router.get('/protected', isLoggedIn, (req, res) => {
    const name = req.user.displayName;
    res.send(`Hello! ${name}`);
});

// Auth logout
router.get('/logout', (req, res) => {

    const cookies = Object.keys(req.cookies)
    cookies.forEach((cookie) => {
        res.clearCookie(cookie)
    })
    res.redirect('/')

})


module.exports = router