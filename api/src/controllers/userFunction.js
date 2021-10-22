const User = require('../models/User')
const generateToken = require('../generateToken');
require('../db.js')
const jwt = require('jsonwebtoken')
const {OAuth2Client} = require ('google-auth-library')
const client = new OAuth2Client('635563607474-r1dntbc7n96ft9d0ik0iv5b7udbcdv2q.apps.googleusercontent.com')

const getAllUser = async (req,res,next) =>{
    const users = await User.find()
    if (users) {
        res.send(users)
    }else {
        res.status(404).send({ message: 'User not found...' })
    }
}
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
        res.status(200).json({error:'Invalid mail or password'})
    }
}
 

const changeStateToInactive = async (req, res) => {
    const userId = await User.findById(req.params._id);
    if (userId){
        userId.state = "inactive"
        await userId.save()
    }
    userId?.state === "inactive"? res.status(200).send("inactive"): res.status(400).send('err')
}

const deleteUser = async (req,res,next) =>{
    const userData = await User.findById(req.params.id);
    try {
        const productDB = User.findByIdAndDelete(userData)
        if(productDB !== null){
            res.status(200).json(productDB)
        }
    }catch(error){
        next(error);
    }
}

const administracion = async (req, res,next)=>{
    const UserAdmin = await User.findById(req.params.id)
    const {newBan, newState} = req.body 
    try{
    const admin = await User.findByIdAndUpdate(UserAdmin._id,{
        fullname: UserAdmin.fullname,
        phone: UserAdmin.phone,
        mail : UserAdmin.mail,
        ban : newBan? newBan  :UserAdmin.ban, 
        password: UserAdmin.password,
        state: newState? newState : UserAdmin.state,
        date: UserAdmin.date,
    });
    res.status(200).json(admin);
    }catch(err){
        console.log(err);
    }
}

const googleLogin = async (req,res) =>{
    try{
        const {tokenId} = req.body;
        client.verifyIdToken({idToken: tokenId, audience: '635563607474-r1dntbc7n96ft9d0ik0iv5b7udbcdv2q.apps.googleusercontent.com'})
        .then((response)=>{
            const {email_verified,name,email} = response.payload;
            if(email_verified){
                User.findOne({mail: email}).exec((err,user)=>{
                    if(err){
                        return res.status(400).json({
                            error:'algo salio mal'
                        })
                    }else{
                        if(user){
                            const token = jwt.sign({_id:user._id}, process.env.JWT_SIGNIN_KEY, {expiresIn: '7d'})
                            const {_id,fullname,mail,state, phone, password}=user;
                            res.json({
                                token,
                                user:{_id, fullname, mail, phone, password},
                                state
                            })
                        }else{
                            const create = async function() {
                                const googleUser = await new User({ 
                                    fullname: name,  
                                    mail: email,
                                })
                                const token = jwt.sign({_id:googleUser._id}, process.env.JWT_SIGNIN_KEY, {expiresIn: '7d'})
                                await googleUser.save()
                                const {_id,fullname,mail,state} = googleUser
                                const obj = {
                                    token,
                                    user:{_id, fullname, mail},
                                    state 
                                }
                                res.status(200).send(obj)
                            }
                            create()
                        }
                    }
                })
            }
        })
    }catch(err){
        console.log(err)
    }
}


module.exports = {
    getAllUser,
    createUser,
    loginUser,
    getUserData,
    deleteUser,
    changeStateToInactive,
    administracion,
    googleLogin
}