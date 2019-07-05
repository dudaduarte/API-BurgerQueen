'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Orders)
  };

    // User.create({
    //   name: 'cynara',
    //   email: 'cynara@gmail.com'
    // })

  return User;
};