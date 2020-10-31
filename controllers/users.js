
const sequelize = require('../db')
const { models } = sequelize


async function getAllUsers(request, response) {
    try {
      const users = await models.users.findAll()
      response.status(200).json({ data: users })
    } catch (error) {
      response.sendStatus(500)
      console.log(error)
      throw error
      
    }
  }

async function createUser(request, response) {
    try {
      const user = await models.users.create(request.body)
      response.status(201).json({ data: user })
    } catch(error) {
      response.sendStatus(500)
      throw error
    }
  }


  module.exports = {
    getAllUsers,
    createUser
  }