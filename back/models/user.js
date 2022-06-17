"use strict";
const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const { hashing } = require("../services/authServices");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Songs);
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: { max: 150, min: 3 },
      },
      gender: { type: Sequelize.ENUM(["male", "female"]), allowNull: true },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profilePicture: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate(async (user) => {
    const hashedPassword = await hashing(user.password);
    user.password = hashedPassword;
  });
  return User;
};
