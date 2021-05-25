const {
  fetchDishes,
  fetchDishById,
  createDish,
} = require('../../controllers/dishes')
const route = require('express').Router()

// http://localhost:2323/api/dishes/
route.get('/', async (req, res) => {
  // Get all dishes
  const dishes = await fetchDishes()
  res.status(200).json(dishes)
})

route.post('/', async (req, res) => {
  // add a new dish

  const dish = await createDish(
    req.body.name,
    req.body.imageUrl,
    req.body.price,
    req.body.description
  )
  res.status(200).json(dish)
})
// now id is in uuidv4 format and not in no so if (isNaN(parseInt(req.params.id))) this check will fail, try to find solution
route.get('/:uuid', async (req, res, next) => {
  /* if (isNaN(parseInt(req.params.id))) {
    console.error(new Error('Dish ID is not correct number'))
    res.redirect('/')

    // next() //although from here we will goto 404 middleware then too we are executing fetchDishById(parseInt(req.params.id)) don't know why, which gives us error "Unknown column 'NaN' in 'where clause' "
    // UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict`
  }
  */
  // console.log(typeof parseInt(req.params.id), parseInt(req.params.id), 'dishes.js in api')
  // fetch a particular dish

  try {
    const dish = await fetchDishById(req.params.uuid)
    res.status(200).json(dish)
  } catch (e) {
    throw e
  }
})

// arrange order of request properly eg /:id and /add so request order matters in middleware

// admin users can edit or delete dish (via restrictd PUT and DELETE requests)
/* After successful authentication, Passport will establish a persistent login session. This is useful for the common scenario of users accessing a web application via a browser. However, in some cases, session support is not necessary. For example, API servers typically require credentials to be supplied with each request. When this is the case, session support can be safely disabled by setting the session option to false.
app.get('/api/users/me',
  passport.authenticate('basic', { session: false }),
  function(req, res) {
    res.json({ id: req.user.id, username: req.user.username });
  });
*/
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

/*
route.get('/:id/comments',(req,res)=>{
    //fetch commments of a particular dish
})

*/
// below middleware never hits bcoz /{any_random_string_if_not_found_in_DB_so_it_will_return_null}
route.use((req, res) => {
  res
    .status(404)
    .send('<h2>404, Page NOT Found DISHES API :( src/routes/api/dishes.js</h2>')
})
module.exports = route
