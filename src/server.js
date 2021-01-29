const { static } = require('express')
const express=require('express')
const path=require('path')
const app=express()
const hbs = require('express-hbs')

const session=require('express-session')
const passport=require('./auth/passport')
const { pass } = require('./auth/strategies/passport-local-strategy')
app.use(passport.initialize())
app.use(passport.session())
app.use('/',express.static(path.join(__dirname,'../public')))


app.engine('hbs', hbs.express4({
    partialsDir: path.join(__dirname, '../views/partials'),
    layoutsDir: path.join(__dirname, '../views/layouts'),
    defaultLayout: path.join(__dirname, '../views/layouts/main.hbs')
  }))
app.set('view engine','hbs')
app.set('views',path.join(__dirname,'../views'))

app.use(session({
  secret:'some super secret string',
  resave:false,
  saveUninitialized:false 
}))

//to make POST request
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.get('/',(req,res)=>res.send('Hello World'))

app.use('/',require('./routes/pages'))
app.use('/api',require('./routes/api'))

// app.listen(2323,()=>{
//     console.log('Server started on http://localhost:3000')
// })

module.exports={
    app
}
