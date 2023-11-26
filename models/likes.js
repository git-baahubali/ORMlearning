'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    UserID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    PostID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    LikeTimestamp: DataTypes.DATE
  }, {});
  return Like;
};
