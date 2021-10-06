const User = require('../models/User')
require('../db.js')


const createUser = async (req,res,next) => {
 const { reported, name, lastName, phone, mail, ban, password, state } = req.body

 const user = new User({reported, name, lastName, phone, mail, ban, password, state})

 user.save(err => {
     if(err){
         res.status(500).send('ERROR AL REGISTRAR USUARIO :(')
     } else {
         res.status(200).send("USUARIO REGISTRADO! :)")
     }
 })

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