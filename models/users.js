const {DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('users', {
        id: {type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        userRole: DataTypes.STRING,
      
       })
       
     
    
}


