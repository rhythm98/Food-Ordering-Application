const { static } = require('express')
const express=require('express')
const path=require('path')
const app=express()
app.use('/',express.static(path.join(__dirname,'../public')))

//to make POST request
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>res.send('Hello World'))
// app.listen(2323,()=>{
//     console.log('Server started on http://localhost:3000')
// })

module.exports={
    app
}
