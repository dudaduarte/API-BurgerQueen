'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,

  }, {});
  Orders.associate = function(models) {
    Orders.belongsTo(models.User);
    Orders.hasMany(models.OrderProduct);
  };

    // Orders.create({
    //   status: 'aguardando preparo',
    //   userId: 1, include: [models.User]
    // })

  return Orders;
};