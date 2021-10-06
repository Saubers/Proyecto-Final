const { Schema, model } = require("mongoose");
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
      
    },
    ban: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      
    },
    date:{
      type:Date,
      default:Date.now
    }

}
);


module.exports = model("Use", UserSchema);
