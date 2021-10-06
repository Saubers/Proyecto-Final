const { Schema, model } = require("mongoose");
const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    mail: {
      type: String,
      required: true,
      unique: true,
    },
    ban: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    date:{
      type:Date,
      default:Date.now
    }

}
);


module.exports = model("User", UserSchema);
