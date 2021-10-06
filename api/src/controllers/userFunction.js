const User = require('../models/User')
require('../db.js')
const bcrypt = require('bcrypt')

const createUser = async ( req, res ,next) => {
 try{
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword, null)
 
    const user = new User({ 
    fullname:req.body.fullname, 
    phone:req.body.phone, 
    mail:req.body.mail, 
    password:securePassword
})
    console.log("ACCAAAA",user)
 await user.save()
 res.status(200).json(user)
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
    authUsers
}