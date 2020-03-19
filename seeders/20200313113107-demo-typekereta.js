'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'typekereta',
      [
        {
          name: 'express',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'ekonomi',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'bisnis',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'eksekutif',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      
    */
    return queryInterface.bulkDelete('typekereta', null, {});
  }
};
