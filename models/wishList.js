const {DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('wishList', {
      
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
       
        userId: {
            type: DataTypes.INTEGER,
            reference: {
              model: 'users',
              key: 'id'
            }
          },
        dishId: {
            type: DataTypes.INTEGER,
            reference: {
            model: 'Dishes',
            key: 'id'
            }
            
        }

    })
}

