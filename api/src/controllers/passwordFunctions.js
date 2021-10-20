const User = require('../models/User');
const crypto = require('crypto');
const sendEmail = require('../utils/mail');
const { error } = require('console');
const generateToken = require('../generateToken');

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
       await user.save();
   
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
       return next(error)
   }
   user.password = req.body.password
   user.confirm_password = req.body.confirm_password
   user.passwordResetToken = undefined;
   user.PasswordResetExpires = undefined;
   await user.save();
   
   // Actualizar la contraseña cambiada como propiedad para el usuario
   
   // Logear el user y enviar JWT
   const token = generateToken(user._id)
   
   res.status(200).json({
       status: 'success',
       token
   })
   }

   module.exports = {
       forgotPassword,
       resetPassword
   }