const { User } = require('../models/db')
const bcrypt = require('bcryptjs')
async function createUser (firstName, lastName, username, email, password) {
  /* in views/pages/auth/signup.hbs form field firstName and lastName is not required
  if (typeof firstName !== 'string' || firstName.length < 1) {
    throw new Error('Firstname empty or undefined')
  }
  if (typeof lastName !== 'string' || lastName.length < 1) {
    throw new Error('Lastname empty or undefined')
  }
  */

  // check username must be unique else you will get error
  // check user already exists or not
  if (typeof username !== 'string' || username.length < 1) {
    throw new Error('username not defined')
  }

  // apply email validation
  // check email already exists or not
  if (typeof email !== 'string' || email.length < 1) {
    throw new Error('email not defined')
  }
  // check password validation here
  if (typeof password !== 'string' || password.length < 1) {
    throw new Error('password not defined')
  }

  const hashedPassword = bcrypt.hashSync(password, 10)

  try {
    // to autoGenerate uuid, mention column names
    return await User.create({
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: hashedPassword
    })
  } catch (e) {
    throw e
  }
}

async function fetchUsers () {
  try {
    return await User.findAll({
      attributes: ['uuid', 'firstName', 'lastName', 'username', 'email']
    })
  } catch (e) {
    throw e
  }
}

async function fetchUserById (userId) {
  try {
    return await User.findByPk(userId)
  } catch (e) {
    throw e
  }
}
// SELECT * FROM user WHERE userName = "rhythm98"
async function fetchUserByUsername (userName) {
  try {
    return await User.findOne({ where: { username: userName } })
  } catch (e) {
    throw e
  }
}

module.exports = {
  createUser,
  fetchUsers,
  fetchUserById,
  fetchUserByUsername
}
