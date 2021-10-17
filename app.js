const express = require('express');
const app = express();
require('./models/index');
const userController = require('./controllers/userController');

const PORT = 8000;

app.get('/', (req, res) => {
  res.send('hello ali here we learn sequelize orm with mysql');
});

app.get('/add', userController.addUser);
app.get('/crudOperation', userController.crudOperation);
app.get('/query', userController.queryData);
app.get('/finder', userController.finder);
app.get('/getterAndSetter', userController.getterAndSetter);
app.get('/constraintsAndValidations', userController.constraintsAndValidations);
app.get('/rawQueries', userController.rawQueries);

app.get('/oneToOne', userController.oneToOne);
app.get('/belongsTo', userController.belongsTo);

app.get('/oneToMany', userController.oneToMany);

app.get('/manyToMany', userController.manyToMany);
app.get('/scopes', userController.scopes);

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
