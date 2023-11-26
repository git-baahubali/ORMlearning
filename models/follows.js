'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    FollowerID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    FollowedID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    FollowTimestamp: DataTypes.DATE
  }, {});
  return Follow;
};
