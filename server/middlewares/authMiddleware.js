
function isAuthenticated(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    } else {
        //res.redirect('/login');
        return res.status(401).json({ message: 'Unauthorized' });
    }
}
module.exports = isAuthenticated;
  