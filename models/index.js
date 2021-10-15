const { Sequelize, DataTypes } = require('sequelize');

// console.log('DataTypes : ', DataTypes);

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
// });

const sequelize = new Sequelize('sequelize_with_mysql', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // for stopping insertion sql queries logs
  pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
});
// OR;
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: ''
// });

sequelize
  .authenticate()
  .then(() => console.log('Connected'))
  .catch((error) => console.log('Error : ', error));

const db = {};
db.sequelize = Sequelize;
db.sequelize = sequelize;

// db.sequelize.sync({ force: false, match: /characterOrNameThatDBContains$/ }).then(() => console.log('yes table sync to db'));
db.sequelize.sync({ force: false, match: /sequelize_with_mysql$/ }).then(() => console.log('yes table sync to db'));

db.users = require('./users')(sequelize, DataTypes);

module.exports = db;
