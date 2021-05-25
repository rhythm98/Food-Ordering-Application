// require('dotenv').config()
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const { app } = require('./server')
const { db } = require('./models/db')
const log = require('debug')('app:run')
const PORT = process.env.PORT || 2323

async function run() {
  await db
    .sync({ force: process.env.FORCE_DB_RESET }) // <-- this promise will run all our sql commands
    .then(() => console.log('Database has been synced'))
    .catch((err) => console.error(`Error creating database: ${err}`))
    
  // console.log('Database is ready')
  log('Database is ready')
  app.listen(PORT, () => {
    console.log('Server started on http://localhost:2323')
  })
}

run()


