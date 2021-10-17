module.exports = (sequelize, DataTypes) => {
  const Post_Tag = sequelize.define('post_tag', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    postId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER,
  });
  return Post_Tag;
};
