// const { static } = require('express')
const express = require('express')
const app = express()
const path = require('path')
const hbs = require('express-hbs')

/*
Handlebars: Access has been denied to resolve the property "name" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details
Solution: https://github.com/handlebars-lang/allow-prototype-access#alternative
 */
const Handlebars = require('handlebars')
const {
  allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access')
const insecureHandlebars = allowInsecurePrototypeAccess(Handlebars)

const flash = require('express-flash') // To display error message in auth, passport uses it internally
const session = require('express-session')
const methodOverride = require('method-override') // Since DELETE request are not supported by forms we need it
const passport = require('./auth/passport')
// const { pass } = require('./auth/strategies/passport-local-strategy')

app.use(flash())
// Using flash messages requires a req.flash() function. Express 2.x provided this functionality, however it was removed from Express 3.x. Use of connect-flash middleware is recommended to provide this functionality when using Express 3.x.

app.use(methodOverride('_method'))
app.use('/', express.static(path.join(__dirname, '../public_static')))

app.engine(
  'hbs',
  hbs.express4({
    partialsDir: path.join(__dirname, '../views/partials'),
    layoutsDir: path.join(__dirname, '../views/layouts'),
    defaultLayout: path.join(__dirname, '../views/layouts/main.hbs'),
    handlebars: insecureHandlebars,
    // extname: 'hbs', <---default value to .hbs
  })
)

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../views'))

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
)
// If session support enabled, be sure to use session() before passport.session()
// to ensure that the login session is restored in the correct order.
app.use(passport.initialize())
app.use(passport.session())
// to make POST request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Remember if you put '/' route above '/api' then you will never be able to hit '/api' route, sequence matters
// bcoz "/" aate hi server routes/pages/index.js ke routes mai search karne lagta hai
app.use('/api', require('./routes/api'))
app.use('/', require('./routes/pages'))

module.exports = {
  app,
}
