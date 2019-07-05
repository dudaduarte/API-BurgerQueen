const express = require('express');
const app = express();
const db = require('./models/index');
const presentation = 'API Burger Queen'

app.listen(3666, () => { console.log('começou a balada') });

app.use(express.json());
app.use('/users', require('./routes/user'));
app.use('/products', require('./routes/products'));
app.use('/orders', require('./routes/orders'));
app.use('/', (req, resp) => {
    resp.send(presentation);
});

db.sequelize.sync();

// app.get("/", (req, resp) => {
//     resp.send("legal");
// });

// app.get("/users", (req, resp) => {
//     resp.send(
//     [
//         {id: 1, name:"Laura"},
//         {id: 2, name:"Maura"},
//         {id: 3, name:"Cibele"}
//     ]
//     );
// });

// esse tipo de parâmetro que tem os dois pontos,
// costumam ser obrigatórios, enquanto os com
// query strings são opcionais.
// app.get("/users/:id", (req, resp) => {
//     resp.send(`Você consultou o id ${req.params.id}`)
// });

//pra quando tiver query string, como: /users?state=SP
// app.get("/users", (req, resp) => {
//     resp.send(`Você consultou o estado ${req.query.state}`)
// })