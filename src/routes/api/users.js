const {
  fetchUsers,
  createUser,
  fetchUserById,
  fetchUserByUsername,
} = require('../../controllers/users')
const route = require('express').Router()

// http://localhost:2323/api/users/
route.get('/', async (req, res) => {
  //Get all users
  const users = await fetchUsers()
  res.status(200).json(users)
})

route.post('/', async (req, res) => {
  //add a new user
  /* check karo ki user already created hai ya nahi with given username and email
  findOne('users', { mail: req.body.email })
  .then((user) => {
   if (user) {
    const error = new Error('User already exists');
    error.status = 409;
    throw error;
   }
   */

  const user = await createUser(
    req.body.firstName,
    req.body.lastName,
    req.body.username,
    req.body.email,
    req.body.password
    // TODO: use actual user id from req.user.id
  )
  res.status(200).send(user)
})

route.get('/:username', async (req, res, next) => {
  // To avoid matching NIL UUID:
  UUIDregexAvoidNIL =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

  let UUIDregex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  if (new RegExp(UUIDregex).test(req.params.username)) next()

  try {
    const user = await fetchUserByUsername(req.params.username)
    /* if username not found, then may be its uuid
    if (user === null) {
      next()
    }
    */
    res.status(200).json(user)
  } catch (e) {
    throw e
  }
  // console.log(typeof parseInt(req.params.id), parseInt(req.params.id), 'user.js in api')
  //fetch a particular dish
})

// now id is in uuidv4 format and not in no so if (isNaN(parseInt(req.params.id))) this check will fail, try to find solution
// else username is unique, you can do query on that
route.get('/:uuid', async (req, res, next) => {
  /*if (isNaN(parseInt(req.params.id))) {
    // res.redirect('/')
    next() //although from here we will goto 404 middleware then too we are executing fetchDishById(parseInt(req.params.id)) don't know why, which gives us error "Unknown column 'NaN' in 'where clause' "
    // UnhandledPromiseRejectionWarning: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict`
  }*/
  try {
    const user = await fetchUserById(req.params.uuid)
    res.status(200).json(user)
  } catch (e) {
    throw e
  }
  // console.log(typeof parseInt(req.params.id), parseInt(req.params.id), 'user.js in api')
  //fetch a particular dish
})
// below middleware never hits bcoz /{any_random_string_if_not_found_in_DB_so_it_will_return_null}
route.use((req, res) => {
  res
    .status(404)
    .send('<h2>404, Page NOT Found :( src/routes/api/users.js</h2>')
})
module.exports = route
