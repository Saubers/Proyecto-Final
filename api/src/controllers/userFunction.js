const User = require('../models/User')
require('../db.js')


const createUser = async (req,res,next) => {
    try{
        const {name,lastName,image,phone,mail,ban,userName,password,state,reported} = req.body;

        const user = new User({
            name,
            lastName,
            image,
            phone,
            mail,
            ban,
            userName,
           // password, aca se encriptaria
            state,
            reported,
        });
        await user.save((err)=> {
            if(err) return res.status(400).json(err)
        })
        res.status(200).json(user)
    }catch(error){
        next(error);
    }
}

const getUsers = async (req,res)=>{
try {
    const allUsers = await User.find()
    return res.status(200).send(allUsers)
} catch (error) {
    console.log(error)
}
}


module.exports = {
    createUser,
    getUsers
}