'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING
  }, {});
  Orders.associate = function(models) {
    Orders.belongsTo(models.User);
    Orders.hasMany(models.OrderProduct);
  };
  return Orders;
};