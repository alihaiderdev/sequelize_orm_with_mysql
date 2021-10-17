// const { where } = require('sequelize/types');
const db = require('../models/index');
const { Sequelize, Op, QueryTypes, Model } = require('sequelize');
// const { users } = require('../models/index');

const Users = db.users;
const Posts = db.posts;
const Tags = db.tags;
const Post_Tag = db.post_tag;

// note if we use findOne and findAll with out any parameters then we can simlpy use it like findOne() and  findAll()
const addUser = async (req, res) => {
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

const crudOperation = async (req, res) => {
  try {
    // insert
    // let data = await Users.create({ name: 'hasnain', gender: 'male', email: 'hasnain@gmail.com' });

    // insert
    // let data = await Users.update({ name: 'hasnain', gender: 'male', email: 'hasnain@gmail.com' }, { where: { id: 64 } });

    // destroy
    // await Users.destroy({ where: { id: 64 } });

    // truncate / delete all table data
    // await Users.destroy({ truncate: true });

    // bulk insert
    let data = await Users.bulkCreate([
      { name: 'mustafa', gender: 'male', email: 'mustafa@gmail.com' },
      { name: 'usman', gender: 'male', email: 'usman@gmail.com' },
      { name: 'arfeen', gender: 'male', email: 'arfeen@gmail.com' },
      { name: 'arsalan', gender: 'male', email: 'arsalan@gmail.com' },
      { name: 'zohaib', gender: 'male', email: 'zohaib@gmail.com' },
      { name: 'talha', gender: 'male', email: 'talha@gmail.com' },
      { name: 'saad', gender: 'male', email: 'saad@gmail.com' },
      { name: 'abid', gender: 'male', email: 'abid@gmail.com' },
      { name: 'faizan', gender: 'male', email: 'faizan@gmail.com' },
      { name: 'hassan', gender: 'male', email: 'hassan@gmail.com' },
      { name: 'shayan', gender: 'male', email: 'shayan@gmail.com' },
      { name: 'saud', gender: 'male', email: 'saud@gmail.com' },
      { name: 'hamza', gender: 'male', email: 'hamza@gmail.com' },
      { name: 'jahanzaib', gender: 'male', email: 'jahanzaib@gmail.com' },
      { name: 'uzair', gender: 'male', email: 'uzair@gmail.com' },
      { name: 'shahroz', gender: 'male', email: 'shahroz@gmail.com' },
      { name: 'rehman', gender: 'male', email: 'rehman@gmail.com' },
      { name: 'ali', gender: 'male', email: 'ali@gmail.com' },
      { name: 'haider', gender: 'male', email: 'haider@gmail.com' },
      { name: 'rehban', gender: 'male', email: 'rehban@gmail.com' },
      { name: 'mujtaba', gender: 'male', email: 'mujtaba@gmail.com' },
      { name: 'talal', gender: 'male', email: 'talal@gmail.com' },
      { name: 'haris', gender: 'male', email: 'haris@gmail.com' },
      { name: 'waseem', gender: 'male', email: 'waseem@gmail.com' },
      { name: 'mehdi', gender: 'male', email: 'mehdi@gmail.com' },
      { name: 'mazhar', gender: 'male', email: 'mazhar@gmail.com' },
      { name: 'azhar', gender: 'male', email: 'azhar@gmail.com' },
      { name: 'akber', gender: 'male', email: 'akber@gmail.com' },
      { name: 'kulsoom', gender: 'female', email: 'kulsoom@gmail.com' },
      { name: 'ayesha', gender: 'female', email: 'ayesha@gmail.com' },
      { name: 'areeba', gender: 'female', email: 'areeba@gmail.com' },
      { name: 'jawaria', gender: 'female', email: 'jawaria@gmail.com' },
      { name: 'afsheen', gender: 'female', email: 'afsheen@gmail.com' },
      { name: 'salma', gender: 'female', email: 'salma@gmail.com' },
      { name: 'iram', gender: 'female', email: 'iram@gmail.com' },
      { name: 'anam', gender: 'female', email: 'anam@gmail.com' },
      { name: 'hina', gender: 'female', email: 'hina@gmail.com' },
      { name: 'saba', gender: 'female', email: 'saba@gmail.com' },
      { name: 'sana', gender: 'female', email: 'sana@gmail.com' },
      { name: 'saima', gender: 'female', email: 'saima@gmail.com' },
      { name: 'shazia', gender: 'female', email: 'shazia@gmail.com' },
      { name: 'shamim', gender: 'female', email: 'shamim@gmail.com' },
      { name: 'laraib', gender: 'female', email: 'laraib@gmail.com' },
      { name: 'naba', gender: 'female', email: 'naba@gmail.com' },
      { name: 'urooj', gender: 'female', email: 'urooj@gmail.com' },
      { name: 'maida', gender: 'female', email: 'maida@gmail.com' },
      { name: 'sanobar', gender: 'female', email: 'sanobar@gmail.com' },
      { name: 'nimra', gender: 'female', email: 'nimra@gmail.com' },
      { name: 'hira', gender: 'female', email: 'hira@gmail.com' },
      { name: 'maryum', gender: 'female', email: 'maryum@gmail.com' },
      { name: 'saman', gender: 'female', email: 'saman@gmail.com' },
      { name: 'jiya', gender: 'female', email: 'jiya@gmail.com' },
      { name: 'palwasha', gender: 'female', email: 'palwasha@gmail.com' },
      { name: 'farzah', gender: 'female', email: 'farzah@gmail.com' },
      { name: 'irha', gender: 'female', email: 'irha@gmail.com' },
      { name: 'zara', gender: 'female', email: 'zara@gmail.com' },
      { name: 'nida', gender: 'female', email: 'nida@gmail.com' },
      { name: 'rimsha', gender: 'female', email: 'rimsha@gmail.com' },
      { name: 'afshan', gender: 'female', email: 'afshan@gmail.com' },
      { name: 'iqra', gender: 'female', email: 'iqra@gmail.com' },
      { name: 'kiran', gender: 'female', email: 'kiran@gmail.com' },
      { name: 'romana', gender: 'female', email: 'romana@gmail.com' },
      { name: 'rizwana', gender: 'female', email: 'rizwana@gmail.com' },
      { name: 'shabana', gender: 'female', email: 'shabana@gmail.com' },
      { name: 'farzana', gender: 'female', email: 'farzana@gmail.com' },
      { name: 'samreen', gender: 'female', email: 'samreen@gmail.com' },
      { name: 'horab', gender: 'female', email: 'horab@gmail.com' },
      { name: 'jhon', gender: 'other', email: 'jhon@gmail.com' },
      { name: 'jack', gender: 'other', email: 'jack@gmail.com' },
      { name: 'karan', gender: 'other', email: 'karan@gmail.com' },
    ]);

    // find / read
    // let data = await Users.findOne({}); // get the very first row from table
    // let data = await Users.findAll({}); // get all rows of a table

    // finding data using conditions

    res.status(200).json({ data });
  } catch (error) {
    console.log('Error : ', error);
    res.status(400).json({ error });
  }
};

const queryData = async (req, res) => {
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

const finder = async (req, res) => {
  // findAll
  // let data = await Users.findAll();
  // res.status(200).json({ data});
  // findByPk
  // let data = await Users.findByPk(2);
  // res.status(200).json({ data});
  // findOne
  // let data = await Users.findOne({ where: { name: 'ali' } });
  // res.status(200).json({ data});
  // findOrCreate
  // const [data, created] = await Users.findOrCreate({
  //   where: { name: 'ali' },
  //   defaults: {
  //     email: 'ali@gmail.com',
  //     gender: 'male',
  //   },
  // });
  // res.status(200).json({ data, created });
  // findAndCountAll
  // const { count, rows } = await Users.findAndCountAll({
  //   where: { title: { [Op.like]: 'foo%' } },
  //   offset: 10,
  //   limit: 2,
  // });
  // res.status(200).json({ count, rows });
  // const data = await Users.findAndCountAll({
  //   where: { name: 'ali' },
  // });
  // res.status(200).json({ data });
};

const getterAndSetter = async (req, res) => {
  // for understanding of getterAndSetter see users.js file
  // for setter
  // let data = await Users.create({ name: 'saad', email: 'saad@gmail.com', gender: 'male' });
  // for getter
  // let data = await Users.findAll({});
  res.status(200).json({ data });
};

const constraintsAndValidations = async (req, res) => {
  // for understanding of constraintsAndValidations see users.js file
  try {
    // res.status(200).json({ data });
  } catch (error) {
    console.log('Error : ', error);
    const messages = {};
    error.errors.forEach((error) => {
      let message;
      // if validations custom messages write/return from users model
      // switch (error.validatorKey) {
      //   case 'not_unique':
      //     message = 'Duplicate Email';
      //     break;

      //   case 'isIn':
      //     message = 'Gender must be male or female';
      //     break;

      //   case 'equals':
      //     message = 'Gender not male';
      //     break;
      // }
      // messages[error.path] = message; // error.path === table column name

      // else
      messages[error.path] = error.message; // error.path === table column name

      console.log('message : ', message);
    });
  }
};

const rawQueries = async (req, res) => {
  try {
    // const data = await db.sequelize.query('Select * from users', {
    //   type: QueryTypes.SELECT,
    //   // model: Users,
    //   // mapToModel: true,
    //   // raw: true,
    // });

    // const data = await db.sequelize.query('Select * from users where gender =:gender', {
    //   type: QueryTypes.SELECT,
    //   replacements: { gender: 'male' },
    // });

    // here if we have second question mark is present then its value will to the second position of the below replacements array
    const data = await db.sequelize.query('Select * from users where gender = $gender', {
      type: QueryTypes.SELECT,
      // replacements: ['other'], // gender = ?
      // replacements: { gender: ['male', 'female'] }, // gender IN(:gender)
      // replacements: { searchEmail: '%.com' }, // email LIKE :searchEmail
      bind: { gender: 'female' }, // gender = $gender
    });
    res.status(200).json({ count: data.length, data });
  } catch (error) {
    console.log('Error : ', error);
    res.status(400).json({ error });
  }
};

const oneToOne = async (req, res) => {
  try {
    // let data = await Posts.bulkCreate([
    //   { name: 'post 1', title: 'title 1', content: 'content 1', userId: 10 },
    //   { name: 'post 2', title: 'title 2', content: 'content 2', userId: 10 },
    //   { name: 'post 3', title: 'title 3', content: 'content 3', userId: 10 },
    //   { name: 'post 4', title: 'title 4', content: 'content 4', userId: 10 },
    //   { name: 'post 5', title: 'title 5', content: 'content 5', userId: 10 },
    //   { name: 'post 6', title: 'title 6', content: 'content 6', userId: 30 },
    //   { name: 'post 7', title: 'title 7', content: 'content 7', userId: 30 },
    //   { name: 'post 8', title: 'title 8', content: 'content 8', userId: 30 },
    //   { name: 'post 9', title: 'title 9', content: 'content 9', userId: 30 },
    //   { name: 'post 10', title: 'title 10', content: 'content 10', userId: 30 },
    //   { name: 'post 11', title: 'title 11', content: 'content 11', userId: 20 },
    //   { name: 'post 12', title: 'title 12', content: 'content 12', userId: 40 },
    //   { name: 'post 13', title: 'title 13', content: 'content 13', userId: 50 },
    //   { name: 'post 14', title: 'title 14', content: 'content 14', userId: 69 },
    //   { name: 'post 15', title: 'title 15', content: 'content 15', userId: 69 },
    // ]);

    let data = await Users.findAll({
      // if we want to get specific data from outer/parent table rather then the whole table info use attributes
      // include: Posts,
      attributes: ['name', 'email', 'gender'],
      // if we want to get specific data from inner/child table rather then the whole table info pass array having an object instead of directly passing model name to include

      // include: [{model :Posts, attributes:["name", "title", "content"]}],
      // include: [{model :Posts, attributes:[["name", "postName"], "title", "content"]}], // table column name change when getting response
      include: [
        { model: Posts, attributes: [['name', 'postName'], 'title', 'content'], as: 'postDetails' },
      ], // table column name change when getting response
      where: { id: 30 },
    });
    res.status(200).json({ count: data.length, data });
  } catch (error) {
    console.log('Error : ', error);
    res.status(400).json({ error });
  }
};

const belongsTo = async (req, res) => {
  try {
    let data = await Posts.findAll({
      attributes: ['content', 'name'],
      include: [
        {
          model: Users,
          attributes: ['name', 'email'],
          as: 'userInfo',
        },
      ],
    });
    res.status(200).json({ count: data.length, data });
  } catch (error) {
    console.log('Error : ', error);
    res.status(400).json({ error });
  }
};

const oneToMany = async (req, res) => {
  try {
    let data = await Users.findAll({
      attributes: ['id', 'name', 'email', 'gender'],
      include: [
        { model: Posts, attributes: [['name', 'postName'], 'title', 'content'], as: 'postDetails' },
      ], // table column name change when getting response
      // where: { id: 50 },
    });
    res.status(200).json({ count: data.length, data });
  } catch (error) {
    console.log('Error : ', error);
    res.status(400).json({ error });
  }
};

const manyToMany = async (req, res) => {
  try {
    // let data = await Post_Tag.bulkCreate([
    //   { postId: 1, tagId: 1 },
    //   { postId: 1, tagId: 2 },
    //   { postId: 1, tagId: 3 },
    //   { postId: 2, tagId: 1 },
    //   { postId: 2, tagId: 2 },
    //   { postId: 5, tagId: 1 },
    //   { postId: 5, tagId: 2 },
    //   { postId: 5, tagId: 3 },
    // ]);
    // let data = await Post_Tag.bulkCreate([
    //   { name: 'Sports' },
    //   { name: 'Education' },
    //   { name: 'Food' },
    //   { name: 'Movies' },
    // ]);

    // POST TO TAG === MANY TO MANY
    // let data = await Posts.findAll({
    //   attributes: ['id', 'name', 'title', 'content', 'userId'],
    //   include: [{ model: Tags, attributes: ['name'] }],
    //   // include: [{ model: Post_Tag, attributes: ['id', 'postId', 'tagId'] }], // can not do this for mutti level table includes or exclude
    //   // exclude: [{ model: Post_Tag }], // can't do this for exclude multi level table
    //   where: { id: 1 },
    // });

    // TAG TO POST === MANY TO MANY
    let data = await Tags.findAll({
      attributes: ['id', 'name'],
      include: [{ model: Posts, attributes: ['name', 'title', 'content'] }],
    });
    res.status(200).json({ count: data.length, data });
  } catch (error) {
    console.log('Error : ', error);
    res.status(400).json({ error });
  }
};

const scopes = async (req, res) => {
  try {
    // let data = await db.usersForScopes.bulkCreate([
    //   { status: 1, name: 'mustafa', gender: 'male', email: 'mustafa@gmail.com' },
    //   { status: 1, name: 'usman', gender: 'male', email: 'usman@gmail.com' },
    //   { status: 1, name: 'arfeen', gender: 'male', email: 'arfeen@gmail.com' },
    //   { status: 1, name: 'arsalan', gender: 'male', email: 'arsalan@gmail.com' },
    //   { status: 1, name: 'zohaib', gender: 'male', email: 'zohaib@gmail.com' },
    //   { status: 1, name: 'talha', gender: 'male', email: 'talha@gmail.com' },
    //   { status: 1, name: 'saad', gender: 'male', email: 'saad@gmail.com' },
    //   { status: 1, name: 'abid', gender: 'male', email: 'abid@gmail.com' },
    //   { status: 1, name: 'faizan', gender: 'male', email: 'faizan@gmail.com' },
    //   { status: 1, name: 'hassan', gender: 'male', email: 'hassan@gmail.com' },
    //   { status: 1, name: 'shayan', gender: 'male', email: 'shayan@gmail.com' },
    //   { status: 1, name: 'saud', gender: 'male', email: 'saud@gmail.com' },
    //   { status: 1, name: 'hamza', gender: 'male', email: 'hamza@gmail.com' },
    //   { status: 1, name: 'jahanzaib', gender: 'male', email: 'jahanzaib@gmail.com' },
    //   { status: 1, name: 'uzair', gender: 'male', email: 'uzair@gmail.com' },
    //   { status: 1, name: 'shahroz', gender: 'male', email: 'shahroz@gmail.com' },
    //   { status: 1, name: 'rehman', gender: 'male', email: 'rehman@gmail.com' },
    //   { status: 1, name: 'ali', gender: 'male', email: 'ali@gmail.com' },
    //   { status: 1, name: 'haider', gender: 'male', email: 'haider@gmail.com' },
    //   { status: 1, name: 'rehban', gender: 'male', email: 'rehban@gmail.com' },
    //   { status: 1, name: 'mujtaba', gender: 'male', email: 'mujtaba@gmail.com' },
    //   { status: 1, name: 'talal', gender: 'male', email: 'talal@gmail.com' },
    //   { status: 1, name: 'haris', gender: 'male', email: 'haris@gmail.com' },
    //   { status: 1, name: 'waseem', gender: 'male', email: 'waseem@gmail.com' },
    //   { status: 1, name: 'mehdi', gender: 'male', email: 'mehdi@gmail.com' },
    //   { status: 1, name: 'mazhar', gender: 'male', email: 'mazhar@gmail.com' },
    //   { status: 1, name: 'azhar', gender: 'male', email: 'azhar@gmail.com' },
    //   { status: 1, name: 'akber', gender: 'male', email: 'akber@gmail.com' },
    //   { status: 1, name: 'kulsoom', gender: 'female', email: 'kulsoom@gmail.com' },
    //   { status: 1, name: 'ayesha', gender: 'female', email: 'ayesha@gmail.com' },
    //   { status: 1, name: 'areeba', gender: 'female', email: 'areeba@gmail.com' },
    //   { status: 1, name: 'jawaria', gender: 'female', email: 'jawaria@gmail.com' },
    //   { status: 1, name: 'afsheen', gender: 'female', email: 'afsheen@gmail.com' },
    //   { status: 1, name: 'salma', gender: 'female', email: 'salma@gmail.com' },
    //   { status: 1, name: 'iram', gender: 'female', email: 'iram@gmail.com' },
    //   { status: 0, name: 'anam', gender: 'female', email: 'anam@gmail.com' },
    //   { status: 0, name: 'hina', gender: 'female', email: 'hina@gmail.com' },
    //   { status: 0, name: 'saba', gender: 'female', email: 'saba@gmail.com' },
    //   { status: 0, name: 'sana', gender: 'female', email: 'sana@gmail.com' },
    //   { status: 0, name: 'saima', gender: 'female', email: 'saima@gmail.com' },
    //   { status: 0, name: 'shazia', gender: 'female', email: 'shazia@gmail.com' },
    //   { status: 0, name: 'shamim', gender: 'female', email: 'shamim@gmail.com' },
    //   { status: 0, name: 'laraib', gender: 'female', email: 'laraib@gmail.com' },
    //   { status: 0, name: 'naba', gender: 'female', email: 'naba@gmail.com' },
    //   { status: 0, name: 'urooj', gender: 'female', email: 'urooj@gmail.com' },
    //   { status: 0, name: 'maida', gender: 'female', email: 'maida@gmail.com' },
    //   { status: 0, name: 'sanobar', gender: 'female', email: 'sanobar@gmail.com' },
    //   { status: 0, name: 'nimra', gender: 'female', email: 'nimra@gmail.com' },
    //   { status: 0, name: 'hira', gender: 'female', email: 'hira@gmail.com' },
    //   { status: 0, name: 'maryum', gender: 'female', email: 'maryum@gmail.com' },
    //   { status: 0, name: 'saman', gender: 'female', email: 'saman@gmail.com' },
    //   { status: 0, name: 'jiya', gender: 'female', email: 'jiya@gmail.com' },
    //   { status: 0, name: 'palwasha', gender: 'female', email: 'palwasha@gmail.com' },
    //   { status: 0, name: 'farzah', gender: 'female', email: 'farzah@gmail.com' },
    //   { status: 0, name: 'irha', gender: 'female', email: 'irha@gmail.com' },
    //   { status: 0, name: 'zara', gender: 'female', email: 'zara@gmail.com' },
    //   { status: 0, name: 'nida', gender: 'female', email: 'nida@gmail.com' },
    //   { status: 0, name: 'rimsha', gender: 'female', email: 'rimsha@gmail.com' },
    //   { status: 0, name: 'afshan', gender: 'female', email: 'afshan@gmail.com' },
    //   { status: 0, name: 'iqra', gender: 'female', email: 'iqra@gmail.com' },
    //   { status: 0, name: 'kiran', gender: 'female', email: 'kiran@gmail.com' },
    //   { status: 0, name: 'romana', gender: 'female', email: 'romana@gmail.com' },
    //   { status: 0, name: 'rizwana', gender: 'female', email: 'rizwana@gmail.com' },
    //   { status: 0, name: 'shabana', gender: 'female', email: 'shabana@gmail.com' },
    //   { status: 0, name: 'farzana', gender: 'female', email: 'farzana@gmail.com' },
    //   { status: 0, name: 'samreen', gender: 'female', email: 'samreen@gmail.com' },
    //   { status: 0, name: 'horab', gender: 'female', email: 'horab@gmail.com' },
    //   { status: 0, name: 'jhon', gender: 'other', email: 'jhon@gmail.com' },
    //   { status: 0, name: 'jack', gender: 'other', email: 'jack@gmail.com' },
    //   { status: 0, name: 'karan', gender: 'other', email: 'karan@gmail.com' },
    // ]);
    // let data = await db.usersForScopes.scope('checkStatus').findAll();

    // using multiple scopes
    // let data = await db.usersForScopes.scope('checkStatus', 'checkGender').findAll();
    // OR
    // let data = await db.usersForScopes.scope('checkStatus').scope('checkGender').findAll();
    // OR
    // let data = await db.usersForScopes.scope(['checkStatus', 'checkGender']).findAll();

    // let data = await db.posts.findAll({
    //   include: [{ model: db.users, attributes: ['name', 'gender', 'email'], as: 'userInfo' }],
    // });

    let data = await db.users.scope('includePost').findAll({});
    res.status(200).json({ count: data.length, data });
  } catch (error) {
    console.log('Error : ', error);
    res.status(400).json({ error });
  }
};

module.exports = {
  addUser,
  crudOperation,
  queryData,
  finder,
  getterAndSetter,
  constraintsAndValidations,
  rawQueries,
  oneToOne,
  belongsTo,
  oneToMany,
  manyToMany,
  scopes,
};
