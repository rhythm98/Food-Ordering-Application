const route = require('express').Router()
const passport = require('../../auth/passport')
const { createUser } = require('../../controllers/users')

// middleware function - if user is NOT logged in then we wont show him index.hbs page (private for logged in users)
function checkIsAuthenticated (req, res, next) {
  // console.log('Rhythm Checking')
  if (req.isAuthenticated()) {
    // console.log(true, 'src/routes/pages/auth.js', req.user.username)
    return next()
  }

  res.redirect('/auth/login') // http://localhost:2323/auth/login
}

// middleware function - if user is already logged in then we wont show him the login(GET/POST) or register(GET/POST) page
function checkNotAuthenticateAgain (req, res, next) {
  // console.log('outside if checkNotAuthenticateAgain ', req.user)
  if (req.isAuthenticated()) {
    // console.log(false, 'src/routes/pages/auth.js', req.user)
    return res.redirect('/auth') // http://localhost:2323/dishes
  }
  next()
}

// http://localhost:2323/auth/
route.get('/', checkIsAuthenticated, (req, res) => {
  // rendering index.hbs file in views/pages/auth folder
  // console.log(true, 'src/routes/pages/auth.js', req.user)
  res.render('pages/index', { userName: req.user.username })
})

// http://localhost:2323/auth/login
route.get('/login', checkNotAuthenticateAgain, (req, res) => {
  // rendering login.hbs file in views/pages/auth folder
  // console.log(true, 'src/routes/pages/auth.js', req.user)

  res.render('pages/auth/login', {
    documentTitle: 'Login'
    // userName: req.user.username,
  })
})

// Logging in by submitting details on http://localhost:2323/auth/login
route.post(
  '/login',
  checkNotAuthenticateAgain,
  passport.authenticate('local', {
    failureRedirect: '/auth/login', // http://localhost:2323/
    successRedirect: '/auth', // http://localhost:2323/dishes
    failureFlash: true,
    successFlash: 'Welcome!'
    // successRedirect: '/private',  <--for logged in users show them their customized page which contain their order details
  })
)
// signup form appears http://localhost:2323/auth/signup
route.get('/signup', checkNotAuthenticateAgain, (req, res) =>
  // rendering signup.hbs file in views/pages/auth folder
  res.render('pages/auth/signup', { documentTitle: 'SignUp' })
)
// submitting details of new user
route.post('/signup', checkNotAuthenticateAgain, async (req, res) => {
  try {
    // check karo ki user already created hai ya nahi with given username and email
    // console.log(true, 'src/pages/auth.js', `Password: ${req.body.password}`)
    await createUser(
      req.body.firstName,
      req.body.lastName,
      req.body.username,
      req.body.email,
      req.body.password
    )
    res.redirect('/auth/login') // if data inserted successfully then after signup redirect to http://localhost:2323/auth/login page then fill data to login into website
  } catch (e) {
    // console.log(e)
    res.redirect('/auth/signup') // failed to create new user so goto http://localhost:2323/auth/signup
    throw e
    // console.error(e)
  }
  // res.redirect('/auth/login')
})
// http://localhost:2323/auth/logout
route.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/auth/login') // http://localhost:2323/auth/login
})

route.use((req, res) => {
  res.status(404).send('<h2>404, Page NOT Found :( routes/pages/auth.js </h2>')
})

module.exports = route
