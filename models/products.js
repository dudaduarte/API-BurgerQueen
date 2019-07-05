'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    is_breakfast: DataTypes.BOOLEAN,
    is_side_dish: DataTypes.BOOLEAN,
    is_beverage: DataTypes.BOOLEAN
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.OrderProduct)
  };


  //    Products.create({
  //    name: 'Café Americano',
  //    price: 5,
  //    is_breakfast: true,
  //    is_side_dish: false,
  //    is_beverage: false
  //  })

  //  Products.create({
  //    name: 'Café com Leite',
  //    price: 7,
  //    is_breakfast: true,
  //    is_side_dish: false,
  //    is_beverage: false
  //  })

  //  Products.create({
  //    name: 'Sanduíche de presunto e queijo',
  //    price: 10,
  //    is_breakfast: true,
  //    is_side_dish: false,
  //    is_beverage: true
  //  })

  //  Products.create({
  //    name: 'Suco de fruta natural',
  //    price: 7,
  //    is_breakfast: true,
  //    is_side_dish: false,
  //    is_beverage: true
  //  })

  //  Products.create({
  //    name: 'Hamburguer simples',
  //    price: 10,
  //    is_breakfast: false,
  //    is_side_dish: false,
  //    is_beverage: false
  //  })

  //  Products.create({
  //    name: 'Hamburguer duplo',
  //    price: 15,
  //    is_breakfast: false,
  //    is_side_dish: false,
  //    is_beverage: false
  //  })

  //  Products.create({
  //    name: 'Batata frita',
  //    price: 5,
  //    is_breakfast: false,
  //    is_side_dish: true,
  //    is_beverage: false
  //  })

  //  Products.create({
  //    name: 'Anéis de cebola',
  //    price: 5,
  //    is_breakfast: false,
  //    is_side_dish: true,
  //    is_beverage: false
  //  })

  //  Products.create({
  //    name: 'Água 500ml',
  //    price: 5,
  //    is_breakfast: false,
  //    is_side_dish: false,
  //    is_beverage: true
  //  })

  //  Products.create({
  //    name: 'Água 750ml',
  //    price: 7,
  //    is_breakfast: false,
  //    is_side_dish: false,
  //    is_beverage: true
  //  })

  //  Products.create({
  //    name: 'Bebida gaseificada 500ml',
  //    price: 7,
  //    is_breakfast: false,
  //    is_side_dish: false,
  //    is_beverage: true
  //  })

  //  Products.create({
  //    name: 'Bebida gaseificada 750ml',
  //    price: 10,
  //    is_breakfast: false,
  //    is_side_dish: false,
  //    is_beverage: true
  //  })


  return Products;
};