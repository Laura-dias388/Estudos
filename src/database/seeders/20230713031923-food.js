'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('foods', [
      {
        name: 'Pizza',
      },
      {
        name: 'Hamburguer',
      },
      {
        name: 'Hot dog',
      },
      {
        name: 'Chocolate',
      },
      {
        name: 'Sorvete',
      },
    ], {});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('foods', null, {});
  }
};