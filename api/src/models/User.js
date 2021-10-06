const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
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
    state: {
      type: String,
      required: true,
    },
    reported: {
      type: Boolean,
      default: false,
    },

}
);

UserSchema.pre('save', function(next){
  if(this.isNew || this.isModified('password')){

  const document = this;

  bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
   if(err){
    next(err);
  } else {
    document.password = hashedPassword;
  }
  })
}else{
  next();
}
})

UserSchema.methods.isCorrectPassword = function(password, callback){
bcrypt.compare(password, this.password, function(err, same){
if(err){
  callback(err)
} else {
  callback(err, same)
}
});
}

module.exports = model("User", UserSchema);
