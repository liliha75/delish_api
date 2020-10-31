'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('dishes',{

      name: Sequelize.STRING,
        image: Sequelize.STRING,
        categoryId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'foodCategories',
            key: 'id',
          } },
    
    
        preparation: Sequelize.TEXT,
        spicy: Sequelize.STRING,
        DiabeticF: Sequelize.TINYINT,
        Vegan: Sequelize.TINYINT,
        official: Sequelize.TINYINT,

    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('dishes');
  }
};
