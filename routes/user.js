const router = require("express").Router(),
  models = require("../models"),
  User = models.User;

router.get("/", (req, resp) => {
  if (req.query.name) {
    User.findAll({ where: { name: req.query.name } }).then(users => {
      resp.send(users);
    });
  }
  User.findAll().then(users => {
    resp.send(users);
  });
});

router.get("/:id", (req, resp) => {
  User.findByPk(req.params.id).then(user => {
    resp.send(user);
  });
});

// router.get("/:name", (req, resp) => {
//   User.findAll({
//     where: { name: req.params.name },
//   }).then(users => {
//     resp.send(users);
//   });
// });

router.delete("/:id", (req, resp) => {
  User.destroy({
    where: { id: req.params.id },
  }).then(() => {
    resp.status(200).send(`Deletado o usuário de id ${req.params}`);
  });
});

router.post("/", (req, resp) => {
  User.create(req.body).then(user => {
    resp.status(201).send(user);
  });
});

router.put("/:id", (req, resp) => {
  User.update({ ...req.body }, { where: { id: req.params.id } }).then(() => {
    User.findByPk(req.params.id).then(user => resp.send(user.dataValues));
  });
});

// pesquisar: swagger e include
// pra postar o bd: heroku
// body parser

module.exports = router;
