'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    'order',
    {
      no_invoice: DataTypes.STRING,
      barcode: DataTypes.STRING,
      id_tiket: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
      id_payment: DataTypes.INTEGER
      // price: DataTypes.INTEGER,
      // qty: DataTypes.INTEGER,
      // totalPrice: DataTypes.INTEGER,
      // status: DataTypes.STRING
    },
    {}
  );
  order.associate = function(models) {
    // associations can be defined here
    order.belongsTo(models.user, {
      foreignkey: 'id_user',
      as: 'user'
    });
    order.belongsTo(models.kereta, {
      foreignkey: 'id_tiket',
      as: 'tiket'
    });
    order.belongsTo(models.payment, {
      foreignkey: 'id_payment',
      as: 'payment'
    });
  };
  return order;
};
