const User = require('../models/User')
const generateToken = require('../generateToken');
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
user.state = await user.encryptState(state)
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

const administracion = async (req, res,next)=>{
    const UserAdmin = await User.findById(req.params.id);
    const {newBan, newState} = req.body 
    try{
    const admin = await User.findByIdAndUpdate(UserAdmin._id,{
        _id: UserAdmin._id,
        fullname: UserAdmin.fullname,
        phone: UserAdmin.phone,
        mail : UserAdmin.mail,
        ban : newBan,
        password: UserAdmin.password,
        state: newState,
        date: UserAdmin.date,
    });
    res.status(200).json(admin);
    }catch(err){
        console.log(err);
    }
}


module.exports = {
    createUser,
    loginUser,
    getUserData,
    deleteUser,
    changeStateToInactive,
    administracion
}