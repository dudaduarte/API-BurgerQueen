const router = require("express").Router();
const models = require("../models");
const Orders = models.Orders;
const OrderProduct = models.OrderProduct;
const Products = models.Products;
const Users = models.User;

router.get("/", (req, resp) => {
  Orders.findAll({
    include: [{ model: OrderProduct, include: [Products] }, Users],
  }).then(orders => {
    resp.send(orders);
  });
});

router.get("/:id", (req, resp) => {
  Orders.findByPk(req.params.id, {
    include: [{ model: OrderProduct, include: [Products] }, Users],
  }).then(order => {
    order ? resp.send(order) : resp.sendStatus(404);
  });
});

router.delete("/:id", (req, resp) => {
  OrderProduct.destroy({ where: { orderId: req.params.id } });
  Orders.destroy({ where: { id: req.params.id } }).then(() => {
    resp.status(200).send(`Deletado o pedido de id ${req.params.id}.`);
  });
});

router.post("/", (req, resp) => {
  console.log(req);
  Orders.create(req.body, { include: [OrderProduct, Users] }).then(order => {
    resp.status(201).send(order.dataValues);
  });
});

router.put("/:id", (req, resp) => {
  Orders.update({ ...req.body }, { where: { id: req.params.id } }).then(() => {
    Orders.findByPk(req.params.id).then(order => resp.send(order.dataValues));
  });
});

module.exports = router;
