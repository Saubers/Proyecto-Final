const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt')
const crypto = require('crypto')

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
    state:{   
      type:String,
      default: 'user'
     },
    date:{
      type:Date,
      default:Date.now
    },
passwordResetToken:{
   type: String
  },
passwordResetExpires:{
  type: Date
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

UserSchema.methods.createPasswordResetToken = function() {
const resetToken = crypto.randomBytes(10).toString('hex');
this.passwordResetToken = crypto
.createHash('sha256')
.update(resetToken)
.digest('hex');

console.log({resetToken}, this.passwordResetToken);

this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

return resetToken;
}

module.exports = model("User", UserSchema);
