const route = require('express').Router()
const { fetchDishes } = require('../../controllers/dishes')

route.get('/', async (req, res) => {
  try {
    const dishes = await fetchDishes()
    res.render('pages/dishes', { dishes })
  } catch (e) {
    res.redirect('/')
  }
})
route.get('/:id',asyn(req,res)=>{
  
})
module.exports = route