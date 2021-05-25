const route = require('express').Router()

route.use('/dishes', require('./dishes'))
route.use('/users', require('./users'))
route.use((req, res) => {
  res.status(404).send('<h2>404, Page NOT Found :( routes/api/index.js </h2>')
})
module.exports = route
