const passport=require('passport')
const { Model } = require('sequelize/types')
const {User}=require('../models/db')
passport.serializeUser((user,done)=>done(null,user.id))
passport.deserializeUser(async(userId,done)=>{
    try{
        const user=await User.findById(userId)
        user.password=undefined
        return done(null,user)
    }catch (e){done(e)}
})
passport.use(require('./strategies/passport-local-strategy'))
module.exports=passport