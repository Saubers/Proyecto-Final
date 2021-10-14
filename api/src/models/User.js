const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt')

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      
    },
    phone: {
      type: String,
      

    },
    mail: {
      type: String,
      unique: true
      
    },
    ban: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      
    },
    isAdmin:{   
      type:Boolean,
      default: false
    },
    date:{
      type:Date,
      default:Date.now
    }

}
);

UserSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt)
}

UserSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password)
}

module.exports = model("Use", UserSchema);
