const {DataTypes } = require('sequelize');


module.exports = (sequelize) => sequelize.define('ingredients', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
 
  name: DataTypes.STRING,
  vegan: DataTypes.TINYINT,
  diabeticF: DataTypes.TINYINT,
  allergy: DataTypes.TINYINT,
  dairy: DataTypes.TINYINT

  
})