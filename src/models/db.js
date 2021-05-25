// https://sequelize.org/v5/manual/associations.html

const Sequelize = require('sequelize')
const db = new Sequelize('dishdb', process.env.DB_USER, process.env.DB_PASS, {
  dialect: 'mysql',
  host: process.env.DB_HOST,
  pool: {
    min: 0,
    max: 5
  }
  // logging:false // <-- if too much sql logs are annoying you
})

const Dish = db.define('dishes', {
  uuid: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(150),
    allowNull: false
  },
  imageUrl: Sequelize.STRING,
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0.0
  },
  description: Sequelize.TEXT
})

// create user roles like customer(general registration) admin(created through restricted API or by a superUser)
const User = db.define('users', {
  uuid: {
    type: Sequelize.DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  username: {
    type: Sequelize.STRING(30),
    allowNull: false,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

/*
const Comment = db.define('comment', {
  title: {
    type: DT.STRING(150),
    allowNull: true
  },
  message: {
    type: DT.TEXT
  }
})

Article.belongsTo(User, { as: 'author' })
User.hasMany(Article, { foreignKey: 'authorId' })

Comment.belongsTo(Article)
Article.hasMany(Comment)

Comment.belongsTo(User)
User.hasMany(Comment)
 */

exports = module.exports = {
  db,
  Dish,
  User
  // Comment
}
