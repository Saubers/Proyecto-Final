const User = require('../models/User')
require('../db.js')
const bcrypt = require('bcrypt')
const passport = require('../controllers/passport')

const getAllUser = async (req, res, next) => {
    try {
        const alluser = await User.find()
        return res.status(200).json([alluser])
    }catch(err) {
        next(err)
    }
}

const createUser = async ( req, res ,next) => {
    const errors = [];
    const {fullname, mail ,password, confirm_password, phone} = req.body;
    const emailUser = await User.findOne({mail: mail});
    if(emailUser) {
        req.flash('error_msg', 'The email is already in use...')
    } 
    if(password != confirm_password){
        req.flash('error_msg', 'Both passwords should be the same')
    }else{
    const user = await new User({ 
    fullname:fullname,  
    phone: phone, 
    mail: mail, 
    password: password,
    confirm_password: confirm_password
})
user.password = await user.encryptPassword(password);
    await user.save()
    req.flash('succes_msg', 'You are registered!')
    res.status(200).send(user)
 
}

}

const logout = async (req, res, next) => {
    req.logout();
    req.flash('succes_msg', 'You are logged out now')
    res.redirect('/user/login')
}

const loginUser = async (req,res,next) => passport.authenticate('local', {
    failureRedirect: '/user /login',
    succesRedirect: '/home',
    failureFlash: true

})




module.exports = {
    createUser,
    loginUser,
    getAllUser,
    logout
}