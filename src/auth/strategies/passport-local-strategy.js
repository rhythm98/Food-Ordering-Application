const { User } = require('../../models/db')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const strategy = new LocalStrategy(async (username, password, done) => {
  try {
    // Strategy to check user login details???
    const user = await User.findOne({ where: { username } })
    if (!user) {
      // return done(new Error('No such username'))
      return done(null, false, { message: 'No such username' }) // <-- no error found on server, false bcoz we didn't found user, message to display
      // return res.send("No such user found!!")
    }

    if (bcrypt.compareSync(password, user.password)) {
      console.log('Password Matched!!')
      user.password = undefined
      return done(null, user) // <-- no error found on server, returning authenticated user
    } else {
      return done(null, false, { message: 'Password incorrect' }) // <-- no error found on server, false bcoz password didn't match, message to display
      // return done(new Error('Password Mismatch'))
      // return res.send("Wrong Password :(")
    }
  } catch (e) {
    return done(e)
  }
})
module.exports = strategy
