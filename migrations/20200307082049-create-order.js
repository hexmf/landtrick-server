'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      no_invoice: {
        type: Sequelize.STRING
      },
      barcode: {
        type: Sequelize.STRING
      },
      id_tiket: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'kereta',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_user: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      id_payment: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'payments',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      // price: {
      //   type: Sequelize.INTEGER
      // },
      // qty: {
      //   type: Sequelize.INTEGER
      // },
      // totalPrice: {
      //   type: Sequelize.INTEGER
      // },
      // status: {
      //   type: Sequelize.ENUM,
      //   values: ['approved', 'cancel', 'pending']
      // },
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
    return queryInterface.dropTable('orders');
  }
};
