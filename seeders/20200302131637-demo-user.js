'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'budi',
          status: 0,
          username: 'budi',
          email: 'budi@gmail.com',
          password: '123',
          gender: 'Male',
          phone: '081772891204',
          address: 'Depok',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'admin',
          status: 1,
          username: 'admin',
          email: 'admin@gmail.com',
          password: 'admin',
          gender: 'Male',
          phone: '081772893204',
          address: 'Tangerang',
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
    return queryInterface.bulkDelete('users', null, {});
  }
};
