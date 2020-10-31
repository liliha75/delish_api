'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('ingredients', {
    
    
      id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
 
      name: Sequelize.STRING,
      vegan: Sequelize.TINYINT,
      diabeticF: Sequelize.TINYINT,
      allergy: Sequelize.TINYINT,
      dairy: Sequelize.TINYINT
    
  
  });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('ingredients');
  }
};
