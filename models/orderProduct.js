'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProduct = sequelize.define('OrderProduct', {
    amount: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {});
  OrderProduct.associate = function(models) {
    OrderProduct.belongsTo(models.Orders);
    OrderProduct.belongsTo(models.Products)
  };
  return OrderProduct;
};