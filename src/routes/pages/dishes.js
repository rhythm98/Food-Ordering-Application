const route = require('express').Router()
const { fetchDishes, fetchDishById } = require('../../controllers/dishes')

// http://localhost:2323/dishes/
route.get('/', async (req, res) => {
  try {
    const dishes = await fetchDishes()
    // firstParameter - todos.hbs  u don't need to mention .hbs extension bcoz u had set view-engine as hbs
    // secondParameter - destructured above todos object
    // ( Food/views/pages/dishes.hbs, destructured above sql arrayResponse )
    // console.log(true,"src/routes/pages/dishes",req.session.passport.user);
    res.render('pages/dishes', { dishArray: dishes, documentTitle: 'Dishes' })
  } catch (e) {
    console.log(e)
    res.redirect('/')
  }
})

route.get('/:uuid', async (req, res, next) => {
  // Fetch a particular dish
  /* since id is in uuidv4 format so we can't checl it via isNaN(parseInt(req.params.id))
  if (isNaN(parseInt(req.params.id))) {
    console.error(new Error('Dish ID is not correct number'))
    res.redirect('/')
    // next(); 404 middleware
  } */
  try {
    // what if given id of dish doesn't exist
    const dishWithGivenId = await fetchDishById(req.params.uuid)
    res.render('pages/dishes/id', {
      dish: dishWithGivenId,
      documentTitle: dishWithGivenId.name,
    })
  } catch (e) {
    throw e
  }
})
// only admin users can edit or delete dish (via frontend form) write put and delete request from frontEnd
// show orders of logged in users
/*
route.get('/', (req, res) => {
  if (req.user) {
    return res.send('Visible to only logged in users')
  } else {
    res.redirect('/login')
  }
})
*/

// below middleware never hits bcoz /{any_random_string_if_not_found_in_DB_so_it_will_return_null}
route.use((req, res) => {
  res.status(404).send('<h2>404, Page NOT Found :( src/routes/pages/dishes.js </h2>')
})

module.exports = route
