const express = require('express');
const cookieParser =require('cookie-parser');
const app =express();
const route = require('./routers/index');
const db= require('./config/database'); // database connection

const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passportLocal');


app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));






app.set('view engine','ejs');

app.set('views','./view');

app.use(session({
    name:'login',
    secret:"secret",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:1000*60*60
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);



app.use('/',route);

app.listen(8000,(err)=>{
if(err)
console.log("error in express");
else
console.log("server is running");
})