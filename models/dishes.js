const {DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('dishes', {
      
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
       
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        categoryId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'foodCategories',
            key: 'id',
          } },
    
      
        preparation: DataTypes.TEXT,
        spicy: DataTypes.STRING,
        DiabeticF: DataTypes.TINYINT,
        Vegan: DataTypes.TINYINT,
        official: DataTypes.TINYINT,

    },
  )
  }