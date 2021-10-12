const User = require('../models/User')
const generateToken = require('../utils/generateToken')
require('../db.js')

const getAllUser = async (req, res, next) => {
    try {
        const alluser = await User.find()
        return res.status(200).json([alluser])
    }catch(err) {
        next(err)
    }
}

const createUser = async ( req, res ,next) => {
    const {fullname, mail ,password, confirm_password, phone} = req.body;
    const emailUser = await User.findOne({mail: mail});
    const userPhone = await User.findOne({phone: phone});
    if(emailUser) {
       return res.status(400).send('Email is already taken')
    }
    if(userPhone){
        return res.status(400).send('That phone number is already taken')
    } 
    if(password != confirm_password){
       return res.status(400).send('Both passwords should be the same')
    }else{
    const user = await new User({ 
    fullname:fullname,  
    phone: phone, 
    mail: mail, 
    password: password,
    confirm_password: confirm_password,
})
user.password = await user.encryptPassword(password);
    await user.save()
    req.flash('succes_msg', 'You are registered!')
    res.status(200).send(user)
 
}

}

const loginUser = async (req,res,next) => {
    const { mail, password } = req.body;
    
    const user = await User.findOne({ mail });

    if(user && (await user.matchPassword(password))) {
        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            password: user.password,
            mail: user.mail,
            phone: user.phone,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).send('Invalid mail or password')
    }
}
 

const logout = async (req, res, next) => {
    req.logout();
    req.flash('succes_msg', 'You are logged out now')
    res.redirect('/user/login')
}






module.exports = {
    createUser,
    loginUser,
    getAllUser,
    logout
}