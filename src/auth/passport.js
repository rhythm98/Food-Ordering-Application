const passport = require('passport')
const { User } = require('../models/db')
// serializeUser define how to store the user in the session
passport.serializeUser((user, done) => done(null, user.uuid)) //no error, storing userId in cookie
// deserializeUser tells how to recover the actual user object from the session
passport.deserializeUser(async (userId, done) => {
  try {
    const user = await User.findByPk(userId)
    user.password = undefined
    return done(null, user)
  } catch (e) {
    done(e)
  }
})
passport.use(require('./strategies/passport-local-strategy'))
module.exports = passport
