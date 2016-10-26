var express = require('express');
var app = express();
var load = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('./passport')();

app.set('port',3000);

// Setting body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static('./public'));

app.use(cookieParser());
app.use(session({
    secret: 'teste',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

load('controllers',{cwd: 'app'})
    .then('routes').into(app);    

module.exports = function(){

    return app;
}