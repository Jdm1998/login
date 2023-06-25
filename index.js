const express = require('express');
const { engine } = require('express/lib/application');
const cookieParser =require('cookie-parser');
const app =express();
const route = require('./routers/index');
const db= require('./config/database'); // database connection


app.set('view engine','ejs');

app.set('views','./view');

app.use(express.static('./assets'));
app.use(express.urlencoded());
app.use(cookieParser());





app.use('/',route);
app.listen(8000,(err)=>{
if(err)
console.log("error in express");
else
console.log("server is running");
})