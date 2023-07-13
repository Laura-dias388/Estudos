'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('foods', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
      },
      name: {
        type : Sequelize.STRING(50),
        allowNull: false,
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('foods');
  }
};
