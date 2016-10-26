var passport = require('passport');
var githubStrategy = require('passport-github').Strategy;

module.exports = function(){
    passport.use(new githubStrategy({
        clientID: '1fad1139dbb75f256f8b',
        clientSecret: '9a081d5eebd76707aee7803d31be3e28136bf68d',
        callbackURL: 'http://localhost:3000/auth/github/callback' 
    }, function(accessToken, refreshToken, profile, done){
        done(null, profile);
    }));

    passport.serializeUser(function(usuario,done){
        done(null, usuario);
    });

    passport.deserializeUser(function(usuario,done){
        done(null, usuario);
    });

    return passport;
};