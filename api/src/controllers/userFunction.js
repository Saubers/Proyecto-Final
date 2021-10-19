const User = require('../models/User')
const generateToken = require('../generateToken')
require('../db.js')

const getUserData = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if(user) {
        res.send(user)
    } else {
        res.status(404).send({ message: 'User not found...' })
    }
} 

const createUser = async ( req, res ,next) => {
    const {fullname, mail ,password, confirm_password, phone, isAdmin} = req.body;
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
    isAdmin: isAdmin
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
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(400).send('Invalid mail or password')
    }
}
 
const updateProfile = async (req, res) => {
 const user = await User.findById(req.user._id);
 if(user) {
     user.fullname = req.body.fullname || user.fullname;
     user.mail = req.body.mail || user.mail;
     if(req.body.password) {
         user.password = bcrypt.hashSync(req.body.password, 8)
     }
     const updatedUser = await user.save()
     res.send({
         _id: updatedUser._id,
         fullname: updatedUser.fullname,
         mail: updatedUser.mail,
         isAdmin: updatedUser.isAdmin,
         token: generateToken(updatedUser),
     })
 }
}

const deleteUser = async (req,res,next) =>{
    const userData = await User.findById(req.params.id);
    console.log(id)
    try {
        const productDB = User.findByIdAndDelete(userData)
        if(productDB !== null){
            res.status(200).json(productDB)
        }
    }catch(error){
        next(error);
    }
}


module.exports = {
    createUser,
    loginUser,
    getUserData,
    updateProfile,
    deleteUser
}