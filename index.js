const express = require("express");
const app = express();
const db = require("./models/index");
const presentation = "API Burger Queen";

app.listen(3666, () => {
  console.log("iniciado");
});

app.use(express.json());
app.use("/users", require("./routes/user"));
app.use("/products", require("./routes/products"));
app.use("/orders", require("./routes/orders"));
app.use("/", (req, resp) => {
  resp.send(presentation);
});

db.sequelize.sync();
