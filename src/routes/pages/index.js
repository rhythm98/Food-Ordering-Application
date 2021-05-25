const route = require('express').Router()

route.use((req, res, next) => {
  // console.log(true, 'src/routes/pages/index.js', req.user) // <--- username doesn't get printed find error
  if (req.user) {
    res.locals.username = req.user.username
  }
  next()
})
/*
// hit this url via http://localhost:2323/ which is currently hitted by public_static/index.html????
route.use('/index', (req, res) => {
  res.render('pages/index') // I want to render index.hbs file in views/pages/index.hbs
})
*/

// route: http://localhost:2323/dishes
route.use('/dishes', require('./dishes'))
// route: http://localhost:2323/auth
route.use('/auth', require('./auth'))
route.use((req, res) => {
  res.status(404).send('<h2>404, Page NOT Found :) src/routes/pages/index.js</h2>')
})

module.exports = route
