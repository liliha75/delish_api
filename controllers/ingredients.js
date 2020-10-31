const sequelize = require('../db')
const {models} = sequelize



  async function getAllIngredients(request, response){
    try{
        const ingredients = models.ingredients.findAll()
        response.status(200).json({data:ingredients})
    }catch(error){
        response.sendStatus(500)
        throw error 

    }
}

async function createIngredient(request, response) {
  try {
    const ingredient = await models.ingredients.create(request.body)
    response.status(201).json({ data: ingredient })
  } catch(error) {
    response.sendStatus(500)
    throw error
  }
}


module.exports ={
    getAllIngredients,
    createIngredient
    
}