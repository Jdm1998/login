const express = require('express');
const {login} = require('../controller/login');
const route = express.Router();

route.get('/',login);



module.exports = route;


