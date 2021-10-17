const { Sequelize, DataTypes } = require('sequelize');

// console.log('DataTypes : ', DataTypes);

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
// });

const sequelize = new Sequelize('sequelize_with_mysql', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true, // for stopping insertion sql queries logs
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
db.sequelize
  .sync({ force: false, match: /sequelize_with_mysql$/ })
  .then(() => console.log('yes table sync to db'));

db.users = require('./users')(sequelize, DataTypes);
db.posts = require('./posts')(sequelize, DataTypes);

db.tags = require('./tags')(sequelize, DataTypes);
db.post_tag = require('./post_tag')(sequelize, DataTypes);

// scopes
db.usersForScopes = require('./usersForScopes')(sequelize, DataTypes);

db.usersForScopes.addScope('checkStatus', {
  where: { status: 1 }, // write multiple line of condition that you want
});

db.usersForScopes.addScope('checkGender', {
  where: { gender: 'male' },
});

db.users.addScope('checkGender', {
  where: { gender: 'male' },
});

db.users.addScope('includePost', {
  attributes: ['name', 'email'],
  include: {
    model: db.posts,
    attributes: ['name', 'title', 'content'],
  },
});

// association and scope at a time
db.users.hasMany(db.posts, { foreignKey: 'userId' }); // default userId
db.posts.belongsTo(db.users.scope('checkGender'), {
  foreignKey: 'userId',
  as: 'userInfo',
});

// one-to-one relation
// db.users.hasOne(db.posts, { foreignKey: 'userId' }); // by conventaion or bydefault it check foreignKey in this formate like userId if we dont pass here any object but if we give foreignKey name rather then this format then we explicitly tell here
// db.users.hasOne(db.posts, { foreignKey: 'userId', as: 'postDetails' }); // default userId
// db.posts.belongsTo(db.users, { foreignKey: 'userId', as: 'userInfo' });

// one-to-many relation
// db.users.hasMany(db.posts, { foreignKey: 'userId', as: 'postDetails' }); // default userId
// db.posts.belongsTo(db.users, { foreignKey: 'userId', as: 'userInfo' });

// many-to-many relation
// db.posts.belongsToMany(db.tags, { through: 'post_tag' });
// db.tags.belongsToMany(db.posts, { through: 'post_tag' });

module.exports = db;
