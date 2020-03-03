'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.INTEGER,
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};