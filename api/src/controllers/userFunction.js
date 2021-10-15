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
 


// const forgotPassword = async (req, res) => {
// const {mail} = req.body;
// if(!mail){
//     return res.status(400).json({message: 'Your mail is required!'})
// }

// const message = 'Check your mail for a link to reset your password...'
// let verificationLink;
// let emailStatus = 'OK'

// const userRepository = getRepository(User);

// let user = User;

// try{
//   user = await userRepository.findOneOrFail({ where: { mail }})  
//   const token = jwt.sign({ userId: user._id, mail: user.mail }, config.jwtSecret, { expiresIn: '10m' })
//   verificationLink = `https://pf-car-shop.herokuapp.com/new-password/${token}`
//   user.resetToken = token
// } catch (error) {
//     return res.json({ message })
// }

// try {
    
// } catch (error) {
//     mailStatus = error
//     return res.status(400).json({message: 'Something goes wrong'})
// }

// try {
//     await userRepository.save(user)
// } catch (error) {
//     mailStatus = error;
//     return res.status(400).json({ message: 'Something goes wrong!' })
// }
// res.json({message, info: mailStatus})
// }

// const createNewPass = async (req, res) => {
//     const { newPassword } = req.body;
//     const resetToken = req.headers('reset')
    
//     if(!resetToken && !newPassword) {
//         res.status(400).json({ message: 'All the fields are required' })
//     }
//     //const userRepository = getRepo
// }





module.exports = {
    createUser,
    loginUser,
    getUserData,
}