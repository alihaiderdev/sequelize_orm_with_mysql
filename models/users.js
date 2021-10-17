const { Sequelize, UUID, UUIDV4 } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'users',
    {
      // name: DataTypes.STRING,
      name: {
        type: DataTypes.STRING,
        // set(value) {
        //   this.setDataValue('name', value, ' sir'); // sirf inserted row ka saath aega
        // },
        // get(value) {
        //   return this.getDataValue('name', 'Mr ', value); // table ki tamaam rows ko get karte waqat unka saath likha aega beshak wo ya kaam karna sa baad ma bani hon ya pehla
        // },
        // get(value) {
        //   return this.getDataValue('name', 'Mr ', value, this.email); // table ki tamaam rows ko get karte waqat unka saath likha jaega / and is tarha hum dosre ushi table ki dosre column ki value ko access kar sakte hain
        // },
      },
      email: {
        type: DataTypes.STRING,
        // defaultValue: 'test@gmail.com',
        allowNull: false,
        unique: true,
      },
      gender: {
        type: DataTypes.STRING,
        validate: {
          // equals: 'male',
          // isIn: [['male', 'female']], //same like mongoose enum

          // equals: {
          //   args: 'male',
          //   msg: 'Please enter only male',
          // },

          isIn: {
            args: [['male', 'female']],
            msg: 'Please select from male and female',
          },
        },
      },
      userId: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        // primaryKey: true,
      },
    },
    {
      // tableName: 'user_data',
      // mysql table structure tab
      // removing timestamps from table
      // timestamps: false,  createdAt: false, updatedAt: false,
      // createdAt: false,
      // updatedAt: false,
      // editing timestamps column name of a table
      // createdAt: 'created_at',
      // updatedAt: 'updated_at',
      // engine: 'MYISAM',
    }
  );
  return Users;
};
