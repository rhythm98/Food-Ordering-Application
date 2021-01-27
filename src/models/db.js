const Sequelize=require('sequelize')
const {DataTypes}=Sequelize
const db=new Sequelize(
    'dishdb','dishuser','dishpass',//database: dish, user, password
    {
        dialect: 'mysql',
        host: 'localhost'
    }
)
module.exports={
    db
}