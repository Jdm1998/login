const express = require('express');
const {login, signin} = require('../controller/login');
const { signup } = require('../controller/signup');
const {profile} = require('../controller/profile');
const newUser = require('../controller/newUser');
const { signout } = require('../controller/signout');
const route = express.Router();

route.get('/',login);
route.post('/signin',signin);

route.get('/signup',signup);

route.post('/signup',newUser);
route.get('/signout',signout);

route.get('/profile',profile);
module.exports = route;


