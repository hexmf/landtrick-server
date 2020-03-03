'use strict';
module.exports = (sequelize, DataTypes) => {
  const train = sequelize.define('train', {
    name_train: DataTypes.STRING,
    date_start: DataTypes.STRING,
    start_station: DataTypes.STRING,
    start_time: DataTypes.STRING,
    destination_station: DataTypes.STRING,
    arrival_time: DataTypes.STRING,
    price: DataTypes.INTEGER,
    qty: DataTypes.INTEGER
  }, {});
  train.associate = function(models) {
    // associations can be defined here
  };
  return train;
};