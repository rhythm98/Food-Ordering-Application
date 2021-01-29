const { User } = require('../models/db')

async function createUser (username, password) {
  try {
    return await User.create({
      username, password
    })
  } catch (e) {
    throw (e)
  }
}

module.exports = {
  createUser
}