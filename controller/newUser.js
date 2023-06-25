const User = require("../model/User");

module.exports =  async function(req,res){

    console.log(req.body);
    console.log('in new user');
    let username = req.body.username;
    let password = req.body.password;
    let confirmpassword =req.body.confirmpassword;
    
    const user={
        Username:req.body.username,
        password:req.body.password
    };
    
     
    const existingUser = await User.findOne({Username:username});

    if(!existingUser){

        const newUser= await User.create(user);
        
        console.log(newUser);
    }


    return res.redirect('/');
}