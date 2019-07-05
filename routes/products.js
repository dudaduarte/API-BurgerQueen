const router = require("express").Router();
const models = require("../models");
const Products = models.Products;

router.get("/", (req, resp) => {
  Products.findAll().then(products => {
    resp.send(products);
  });
});

router.get("/:id", (req, resp) => {
  Products.findByPk(req.params.id).then(products => {
    resp.send(products);
  });
});

router.get("/:name", (req, resp) => {
  Products.findAll({
    where: { name: req.params.name },
  }).then(products => {
    resp.send(products);
  });
});

router.delete("/:id", (req, resp) => {
  Products.destroy({
    where: { id: req.params.id },
  }).then(() => {
    resp.status(200).send(`Deletado o produto de id ${req.params.id}.`);
  });
});

router.post("/", (req, resp) => {
  Products.create(req.body).then(product => {
    resp.status(201).send(product);
  });
});

router.put("/:id", (req, resp) => {
  Products.update({ ...req.body }, { where: { id: req.params.id } }).then(
    () => {
      Products.findByPk(req.params.id).then(product =>
        resp.send(product.dataValues)
      );
    }
  );
});

module.exports = router;
