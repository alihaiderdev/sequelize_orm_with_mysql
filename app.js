const express = require('express');
const app = express();
require('./models/index');
const userController = require('./controllers/userController');

const PORT = 8000;

app.get('/', (req, res) => {
  res.send('hello ali here we learn sequelize orm with mysql');
});

app.get('/add', userController.addUser);
app.get('/crud', userController.crudOperation);
app.get('/query', userController.queryData);

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
