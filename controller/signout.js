module.exports.signout=function(req,res){
    res.clearCookie('id');
    

    res.redirect('/');
}