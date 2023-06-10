
// Packages


// Middlewares
function isLoggedIn (req, res, next) {
    req.user ? next() : res.sendStatus(401);
}