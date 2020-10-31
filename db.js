const {Sequelize} = require('sequelize')

const dishes = require('./models/dishes')
const dishIngredients = require('./models/dishIngredients')
const foodCategories = require('./models//foodCategories')
const ingredients = require('./models/ingredients')
const users = require('./models/users')
const wishList = require('./models/wishList')

const sequelize = new Sequelize('delish_second', 'root', 'lili8l', {

    host:'localhost',
    dialect:'mariadb',
    logging: console.log
})

const models=[
    dishes, 
    dishIngredients,
    foodCategories,
    ingredients,
    users,
    wishList

]

for (const model of models){
    model(sequelize)
}

const { dishes: modelDish, dishIngredients: modelDishI, foodCategories: modelFoodC, ingredients: modelIngredient, users:modelUser, wishList: modelWIsh }= sequelize.models

modelFoodC.hasMany(modelDish)
modelDish.belongsTo(modelFoodC)

modelUser.hasMany(modelWIsh)
modelWIsh.belongsTo(modelUser)

modelDish.hasMany(modelWIsh)
modelWIsh.belongsTo(modelDish)

modelDish.belongsToMany(modelIngredient, {through:modelDishI})
modelIngredient.belongsToMany(modelDish, {through: modelDishI})

//modelDish.hasMany(modelDishI)
//modelDishI.belongsTo(modelDish)

//dishes.hasMany(ingredients)
//ingredientes.belongsToMany(dishes, {through:'dishIngredients'})



module.exports = sequelize
