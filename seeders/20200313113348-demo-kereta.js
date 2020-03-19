'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'kereta',
      [
        {
          name_train: 'Argo Wilis',
          id_type: 1,
          dateStart: '2020-01-22',
          startStation: 'Manggarai',
          startTime: '07:09:59',
          destinationStation: 'Jambi',
          arivalTime: '10:09:59',
          price: 20000,
          qty: 100,
          updatedAt: new Date(),
          createdAt: new Date()
        },
        {
          name_train: 'Hogwards',
          id_type: 2,
          dateStart: '2020-01-22',
          startStation: 'Serang',
          startTime: '12:04:59',
          destinationStation: 'Jambi',
          arivalTime: '10:09:59',
          price: 20000,
          qty: 100,
          updatedAt: new Date(),
          createdAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    // Add reverting commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkDelete('kereta', null, {});
  }
};
