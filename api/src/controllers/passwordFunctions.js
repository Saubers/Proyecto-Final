const User = require('../models/User');
const crypto = require('crypto');
const sendEmail = require('../utils/mail');
const { error } = require('console');
const generateToken = require('../generateToken');
const { promisify } = require('util');

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


   const protect = async (req, res, next) => {
       let token;
       if(
           req.headers.authorization &&
           req.headers.authorization.startsWith('bearer')
       ) {
           token = req.headers.authorization.split(' ')[1];
       }

       if(!token) {
           return next(
               Error
           )
       }

       const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

       const currentUser = await User.findById(decoded.id);
       if(!currentUser){
           return next(
               Error
           )
       }
       if(currentUser.changePasswordAfter(decoded.iat)) {
           return next(Error)
       }
       req.user = currentUser;
       next();
   }

   
   const updatePassword = async (req,res,next) => {
   // Agarrar usuario de la coleccion
   const user = await User.findById(req.user.id).select('+password');
     
   // Verificar si la contraseña posteada es correcta
   if (!(await user.matchPassword(req.body.currentPassword, password))) {
       return next(Error, 401)
   }

   // Si pasa eso, actualiza el password
   user.password = req.body.password
   user.confirm_password = req.body.confirm_password
   await user.save();

   // Logear el usuario, enviar JWT
   const token = generateToken(user._id)
   
   res.status(200).json({
       status: 'success',
       token,
       data: {
           user
       }
   })
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
       resetPassword,
       updatePassword,
       protect
   }