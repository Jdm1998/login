const User = require('../model/User');

module.exports.login = function(req,res){
    res.render('login');
}

module.exports.signin = async function(req,res){

     let authenticateUser = await User.findOne({Username:req.body.username,password:req.body.password});
            console.log(authenticateUser);
     if(authenticateUser){
        res.cookie('id',authenticateUser.Username);
        res.render('./profile',{user:authenticateUser});
     }
     else
     res.render('login');
}