const route = require('express').Router()
const passport = require('../../auth/passport')
const { createUser } = require('../../controllers/users')

route.get('/login', (req, res) => res.render('pages/auth/login'))
route.get('/signup', (req, res) => res.render('pages/auth/signup'))

route.post('/signup', async (req, res) => {
  try {
    await createUser(req.body.username, req.body.password)
  } catch (e) {
    throw e
  }
  res.redirect('/auth/login')
})

route.post('/login', passport.authenticate('local', {
  failureRedirect: '/',
  successRedirect: '/dishes'
}))

module.exports = route