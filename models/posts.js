'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    PostID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    UserID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'UserID'
      }
    },
    PostContent: DataTypes.TEXT,
    PostDate: DataTypes.DATE
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User, { foreignKey: 'UserID' });
    Post.hasMany(models.Reply, { foreignKey: 'PostID' });
  };
  return Post;
};
