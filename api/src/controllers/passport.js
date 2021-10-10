const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User')


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {

   // Compruebo si coincide el email
 const user = await User.findOne({email})
if(!user){
    return done(null, false, {message: 'Not user founded...'})
} else {
    // Compruebo si coincide la password
 const match = await user.matchPassword(password);
 if(match) {
     return done(null, user)
 } else {
     return done(null, false, {message: 'Incorrect password...'})
 }

}
}))

passport.serializeUser((user, done) => {
done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findeById(id, (err, user) => {
        done(err, user)
    })
})
