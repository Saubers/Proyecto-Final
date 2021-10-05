const { Schema, model } = require("mongoose");
//const bcrypt = require("bcryptjs");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    image: {
      type: String, // todavia falta deducir como mandan la foto desde el front
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
    promoted: {
      type: Boolean,
      default: false,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
       unique: true
    },
    state: {
      type: String,
      required: true,
    },
    reported: {
      type: Boolean,
      default: false,
    },
},
  {
    timestamps: true, // timestamps para que nos cargue fecha de ser creado y de actualizado si las hay
  }
);
module.exports = model("User", userSchema);
