const User = require('../models/User')
const crypto = require('crypto')
const generateToken = require('../generateToken');
const sendEmail = require('../utils/mail');
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
    const {fullname, mail ,password, confirm_password, phone, state} = req.body;
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
    state: state
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
            state: user.state,
            token: generateToken(user._id),
        })
    } else {
        res.status(400).send('Invalid mail or password')
    }
}
 
const forgotPassword = async (req, res, next) => {
 // Agarro la informacion del email de usuario
 const user = await User.findOne({ mail: req.body.mail })
 if(!user) {
     return next(res.status(404).send('Ther is no user with this mail address'))
    }
 // Genero token
const resetToken = user.createPasswordResetToken();
await user.save({validateBeforSave: false});
 // El usuario lo recibe por mail
const resetURL = `${req.protocol}://${req.get(
    'host'
    )}/resetPassword/${resetToken}`;

    const message = `Forgot your password? Submit a PATCH req with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;
try{
    await sendEmail({
        email:user.mail,
        subject: 'Your password reset token (valid for 10 min)',
        message
    });
    
    res.status(200).json({
        status: 'success',
        message: 'Token sent to email!'
    })
} catch (err) {
    user.createPasswordResetToken = undefined
    user.createPasswordResetExpires = undefined
    await user.save({validateBeforSave: false});

    return next(err, 500)
}

}

const resetPassword = async (req, res, next) => {
// Obtener el usuario basado en el token
const hashToken = crypto
.createHash('sha256')
.update(req.params.token)
.digest('hex')

const user = await User.findOne({passwordResetToken: hashToken,
    PasswordResetExpires: {$gt: Date.now()}})

// Si el token no expiro, y el usuario existe, setea la nueva contraseña
if(!user) {
    return next(console.error('Token is invalid or has expired'), 400)
}
user.password = req.body.password
user.confirm_password = req.body.confirm_password
user.passwordResetToken = undefined;
user.PasswordResetExpires = undefined;

// Actualizar la contraseña cambiada como propiedad para el usuario

// Logear el user y enviar JWT
}

const changeStateToInactive = async (req, res) => {
    const userId = await User.findById(req.params._id);
    console.log(userId)
    if (userId){
        userId.state = "inactive"
        await userId.save()
    }
    userId?.state === "inactive"? res.status(200).send("inactive"): res.status(400).send('err')
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
    forgotPassword,
    resetPassword,
    deleteUser,
    changeStateToInactive,
}