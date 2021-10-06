const User = require('../models/User')
require('../db.js')
const bcrypt = require('bcrypt')

const getAllUser = async (req, res, next) => {
    try {
        const alluser = await User.find()
        return res.status(200).json([alluser])
    }catch(err) {
        next(err)
    }
}

const createUser = async ( req, res ,next) => {
    const {fullname, mail,password,phone} = req.body;
 try{
    const user = new User({ 
    fullname:fullname,  
    phone: phone, 
    mail: mail, 
    password: password
})
    await user.save()
    res.status(200).send(user)
 }catch(err){
     next(err)
 }
   

}

const authUsers = async (req,res)=>{

const {reported, name, lastName, phone, mail, ban, password, state} = req.body

User.findOne({mail}, (err, user) =>{
    if(err){
        res.send(500).send('ERROR AL AUTENTICAR USUARIO')
    } else if (!user){
        res.send(500).send('EL USUARIO NO EXISTE')
    } else {
        user.isCorrectPassword(password, (err, result) => {
            if(err){
                res.send(500).send('ERROR AL AUTENTICAR USUARIO')
            } else if(result){
                res.status(200).send("USUARIO AUTENTICADO CORRECTAMENTE! :)")
            } else {
                res.send(500).send('USUARIO Y/O CONTRASEÑA INCORRECTA')
            }
        });
    }
})

}


module.exports = {
    createUser,
    authUsers,
    getAllUser
}