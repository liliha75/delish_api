
const sequelize = require('../db')
const { models } = sequelize


async function getAllCategories(request, response) {
    try {
      const foodCat = await models.foodCategories.findAll()
      response.status(200).json({ data: foodCat })
    } catch (error) {
      response.sendStatus(500)
      throw error
    }
  }

async function createCategory(request, response) {
    try {
      const foodCategory = await models.foodCategories.create(request.body)
      response.status(201).json({ data: foodCategory })
    } catch(error) {
      response.sendStatus(500)
      throw error
    }
  }


  module.exports = {
    createCategory,
    getAllCategories
  }