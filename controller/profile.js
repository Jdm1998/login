const User = require("../model/User");

module.exports.profile = async function (req,res){

    // let userId=req.Cookie('id');
    
    console.log(req.cookies.id);

    if(!req.cookies.id){
         return res.redirect('/');
    }
    let user = await User.findOne({Username:req.cookies.id});

    if(!user){
       return  res.redirect('back');
    }
    else

    res.render('profile',{user:user});

}