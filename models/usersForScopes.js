const { Sequelize, UUID, UUIDV4 } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const UsersForScopes = sequelize.define('usersForScopes', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      defaultValue: 'test@gmail.com',
      allowNull: false,
      unique: true,
    },
  });
  return UsersForScopes;
};
