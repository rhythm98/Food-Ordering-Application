const{User}=require('../../models/db')
const LocalStrategy=require('passport-local').Strategy
const strategy=new LocalStrategy(async (username,password,done)=>{
    try{
        const user=await User.findOne({where:{username}})
    if(!user){
        return done(new Error ('No such username'))
    }
    if(user.password!==password){
        return done(new Error('Password Mismatch'))
    }
    user.password=undefined
    return done(null,user)
    }catch e{
        return done( e)
    }
})
module.exports=strategy