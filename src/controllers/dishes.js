const { Dish /* , Comment */ } = require('../models/db')

async function createDish (name, imageUrl, price, description) {
  if (typeof name !== 'string' || name.length < 1) {
    throw new Error('Dish name empty or undefined')
  }
  if (typeof imageUrl !== 'string' || imageUrl.length < 1) {
    throw new Error('Image Url empty or undefined')
  }
  if (typeof parseFloat(price) !== 'number') {
    throw new Error('Price of dish not defined')
  }
  if (typeof description !== 'string' || description.length < 1) {
    throw new Error('Dish description empty or undefined')
  }
  try {
    return await Dish.create({
      name: name,
      imageUrl: imageUrl,
      price: price,
      description: description,
    })
  } catch (e) {
    throw e
  }
}

async function fetchDishes() {
  try {
    // console.log("inside controller dish");
    return await Dish.findAll({
      attributes: ['uuid', 'name', 'imageUrl', 'price', 'description'],
    })
  } catch (e) {
    throw e
  }
}
// implement uuid also currently remember id starts from '1' in database
async function fetchDishById(dishId) {
  try {
    return await Dish.findByPk(
      dishId
      /* applying sql join to obtain all comments on a particular dish by different users
      Associations - https://sequelize.org/v5/manual/associations.html
      , {
        include:[
          {
            model:Comment,
            include:[
              {
                model:User,
                attributes:['username']
              }
            ]
          }
        ]
      }
      */
    )
  } catch (e) {
    throw e
  }
}

module.exports = {
  createDish,
  fetchDishes,
  fetchDishById
}
