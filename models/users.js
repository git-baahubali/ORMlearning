"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      UserID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      UserName: DataTypes.STRING,
      Email: DataTypes.STRING,
      Password: DataTypes.STRING, // Consider hashing passwords
      SignUpDate: DataTypes.DATE,
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Post, { foreignKey: "UserID" });
    User.belongsToMany(models.User, {
      as: "Followers",
      through: "follows",
      foreignKey: "FollowedID",
      otherKey: "FollowerID",
    });
    User.belongsToMany(models.User, {
      as: "Following",
      through: "follows",
      foreignKey: "FollowerID",
      otherKey: "FollowedID",
    });
  };
  return User;
};
