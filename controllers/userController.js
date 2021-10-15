// const { where } = require('sequelize/types');
var db = require('../models/index');
const { Sequelize } = require('sequelize');
const Users = db.users;
var addUser = async (req, res) => {
  //   let data = await Users.build({ name: 'rehman', email: 'rehman@gmail.com' });
  //   await data.save();
  let data = await Users.create({ name: 'rehman', email: 'rehman@gmail.com' });
  //   update req object
  //   data.name = 'ali';
  //   await data.save();

  //   delete req object
  //   data.destroy();

  //   reload req object
  //   data.name = 'saad';
  //   data.reload();
  //   await data.save();
  console.log('data : ', data.dataValues);
  res.status(200).json({ message: 'addUser' });
};

var crudOperation = async (req, res) => {
  // insert
  //   let data = await User.create({ name: 'rehman', gender: 'male', email: 'rehman@gmail.com' });
  //   console.log('data : ', data.id);

  // insert
  // let data = await Users.update({ name: 'hasnain', gender: 'male', email: 'hasnain@gmail.com' }, { where: { id: 64 } });
  // console.log('data : ', data);

  // destroy
  // await Users.destroy({ where: { id: 64 } });

  // truncate / delete all table data
  // await Users.destroy({ truncate: true });

  // bulk insert
  // let data = await Users.bulkCreate([
  //   { name: 'rehman', gender: 'male', email: 'rehman@gmail.com' },
  //   { name: 'hasnain', gender: 'male', email: 'hasnain@gmail.com' },
  // ]);
  // console.log('data : ', data);

  // find / read

  // let data = await Users.findOne({}); // get the very first row from table
  // let data = await Users.findAll({}); // get all rows of a table

  // finding data using conditions

  res.status(200).json({ message: 'crudOperation' });
};

var queryData = async (req, res) => {
  // insert
  let data = await User.create({ name: 'rehman', gender: 'male', email: 'rehman@gmail.com' }, { fields: ['email', 'gender'] });
  console.log('data : ', data.id);

  // select
  // let data = await User.findAll({ attributes: ['email', 'gender'] }); // getting all data with only that fields we passing in array
  // let data = await User.findAll({ attributes: [['email', 'emailID'], 'gender'] }); // getting all data with only that fields we passing in array and also renaming it

  res.status(200).json({ message: 'queryData' });
};

module.exports = { addUser, crudOperation, queryData };
