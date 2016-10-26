var passport = require('passport');

module.exports = function(app){

    app.get('/login/github', passport.authenticate('github'));

    app.get('/auth/github/callback', passport.authenticate('github', {successRedirect: '/'}));
}