const {Schema ,model} = require('mongoose')

const UserSchema = new Schema({
    name :{
        type : String,
        required: true
    },
    mail : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required: true
    },
    status : {
        type : String,
        required: true
    },
    })


module.exports = model('User', UserSchema)