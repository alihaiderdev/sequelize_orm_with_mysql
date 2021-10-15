// const { where } = require('sequelize/types');
var db = require('../models/index');
const { Sequelize, Op } = require('sequelize');
const Users = db.users;

// note if we use findOne and findAll with out any parameters then we can simlpy use it like findOne() and  findAll()
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
  //   let data = await Users.create({ name: 'rehman', gender: 'male', email: 'rehman@gmail.com' });
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
  // let data = await Users.create({ name: 'rehman', gender: 'male', email: 'rehman@gmail.com' }, { fields: ['email', 'gender'] });
  // console.log('data : ', data.id);

  // select
  // let data = await Users.findAll({});
  // let data = await Users.findAll({ attributes: ['email', 'gender'] }); // getting all data with only that fields we passing in array
  // let data = await Users.findAll({ attributes: [['email', 'emailID'], 'gender'] }); // getting all data with only that fields we passing in array and also renaming it

  // getting all data with only that fields we passing in array and also renaming it and count the no of records using email
  // let data = await Users.findAll({
  //   attributes: ['name', ['email', 'emailID'], 'gender', [Sequelize.fn('Count', Sequelize.col('email')), 'emailCount']], // here count s case sensitive means count, COUNT, Count all are same
  // });

  // getting all data with only that fields we passing in array and also renaming it and concat it with anything that we want
  // let data = await Users.findAll({
  //   attributes: ['name', ['email', 'emailID'], 'gender', [Sequelize.fn('concat', Sequelize.col('email'), 'ID'), 'emailConcat']],
  // });

  // include / exclude
  // let data = await Users.findAll({
  //   attributes: { exclude: 'createdAt' }, // exclude single value
  // });
  // let data = await Users.findAll({
  //   attributes: { exclude: ['createdAt', 'updatedAt'] }, // exclude mutiple values
  // });

  // exclude and include at a time
  // let data = await Users.findAll({
  //   attributes: {
  //     exclude: ['createdAt', 'updatedAt'],
  //     include: [[Sequelize.fn('concat', 'Mr ', Sequelize.col('name'), ' ', Sequelize.col('email')), 'fullName']],
  //   },
  // });

  // conditions
  // let data = await Users.findAll({ where: { id: 63 } });
  // OR
  // let data = await Users.findAll({ where: { id: { [Op.eq]: 63 } } });

  // operators
  // let data = await Users.findAll({ where: { id: { [Op.gte]: 1 } } });
  // let data = await Users.findAll({ where: { email: { [Op.like]: '%.com' } } }); // get all records that email ends at .com
  // let data = await Users.findAll({ where: { email: { [Op.like]: 'r%' } } }); // get all records that email starts from r
  // let data = await Users.findAll({ where: { email: { [Op.like]: '%r%' } } }); // get all records that email contains r
  // let data = await Users.findAll({ where: { id: { [Op.gt]: 3 }, email: { [Op.like]: '%r%' } } }); // get all records that email contains r

  // orderBy
  // let data = await Users.findAll({ where: { id: { [Op.gt]: 1 }, email: { [Op.like]: '%.com' } }, order: [['name', 'desc']] }); // get all records that email ends at .com and groupby descending order
  // let data = await Users.findAll({
  //   where: { id: { [Op.gt]: 1 }, email: { [Op.like]: '%.com' } },
  //   order: [
  //     ['name', 'desc'], // desc and asc case sensitive
  //     ['email', 'asc'],
  //   ],
  // }); // get all records that email ends at .com and orderby descending order

  // limit
  // let data = await Users.findAll({
  //   where: { id: { [Op.gt]: 1 }, email: { [Op.like]: '%.com' } },
  //   order: [
  //     ['name', 'desc'], // desc and asc case sensitive
  //   ],
  //   limit: 2,
  // }); // get all records that email ends at .com and orderby descending order and limit it

  // offset
  // let data = await Users.findAll({
  //   where: { id: { [Op.gt]: 1 }, email: { [Op.like]: '%.com' } },
  //   order: [
  //     ['name', 'desc'], // desc and asc case sensitive
  //   ],
  //   limit: 2,
  //   offset: 1,
  // }); // get all records that email ends at .com and orderby descending order and limit it

  // groupby
  // let data = await Users.findAll({
  //   where: { id: { [Op.gt]: 1 }, email: { [Op.like]: '%.com' } },
  //   order: [
  //     ['name', 'desc'], // desc and asc case sensitive
  //   ],
  //   // group: ['email'],
  //   group: ['name', 'email'],
  //   limit: 2,
  //   offset: 1,
  // }); // get all records that email ends at .com and orderby descending order and limit it

  // count
  // let data = await Users.count({});
  // OR;
  let data = await Users.count();
  res.status(200).json({ data });
};

module.exports = { addUser, crudOperation, queryData };
