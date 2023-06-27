const express = require('express');
const {login, signin} = require('../controller/login');
const { signup } = require('../controller/signup');
const {profile} = require('../controller/profile');
const newUser = require('../controller/newUser');
const { signout } = require('../controller/signout');
const passport = require('../config/passportLocal');
const createSession = require('../controller/createSession');
const route = express.Router();

route.get('/',login);
route.post('/signin',passport.authenticate( 'local',
{failureRedirect:'/'}),
signin);

route.get('/signup',signup);

route.post('/signup',newUser);
route.get('/signout',signout);
route.get('/profile',passport.checkAuthentication,profile);

route.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect:'/'},
    createSession
))
module.exports = route;


