module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'users',
    {
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        defaultValue: 'test@gmail.com',
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
