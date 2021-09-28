const {Schema ,model} = require('mongoose')

const UserSchema = new Schema({
    name :{
        type : String,
        required: true
    },
    mail : String,
    password : String,
    status : [String]
})


module.exports = model('User', UserSchema)