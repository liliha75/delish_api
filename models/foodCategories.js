const {DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
    sequelize.define('foodCategories', {
      
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
       
        name: DataTypes.STRING,
        image:  DataTypes.STRING

    })
}

