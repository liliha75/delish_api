const {DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
    sequelize.define('dishIngredients', {
      
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
       
        ingredientId: {
            type: DataTypes.INTEGER,
            reference: {
              model: 'ingredients',
              key: 'id'
            }
          },
        dishId: {
            type: DataTypes.INTEGER,
            reference: {
            model: 'dishes',
            key: 'id'
            }
            
        }

    })
}


