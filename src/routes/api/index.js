const route = require('express').Router()
route.use('/dishes',require('./dishes'))
route.use('/users',require('./users'))
module.exports=route