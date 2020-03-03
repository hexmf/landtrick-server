'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trains', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_train: {
        type: Sequelize.STRING
      },
      date_start: {
        type: Sequelize.STRING
      },
      start_station: {
        type: Sequelize.STRING
      },
      start_time: {
        type: Sequelize.STRING
      },
      destination_station: {
        type: Sequelize.STRING
      },
      arrival_time: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trains');
  }
};