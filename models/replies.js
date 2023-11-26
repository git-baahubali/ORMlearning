'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define('Reply', {
    ReplyID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    PostID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Posts',
        key: 'PostID'
      }
    },
    UserID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'UserID'
      }
    },
    ReplyContent: DataTypes.TEXT,
    ReplyTimestamp: DataTypes.DATE
  }, {});
  Reply.associate = function(models) {
    // associations can be defined here
    Reply.belongsTo(models.Post, { foreignKey: 'PostID' });
    Reply.belongsTo(models.User, { foreignKey: 'UserID' });
  };
  return Reply;
};
