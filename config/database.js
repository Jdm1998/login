const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost:27017/users');

const db =mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to database'));
db.once('open',()=>{
    console.log('successfully connect to db');
})