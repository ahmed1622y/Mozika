"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Songs extends Model {
    static associate(models) {
      Songs.belongsTo(models.User);
    }
  }

  Songs.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },

      length: { type: DataTypes.INTEGER, allowNull: false },

      path: { type: DataTypes.STRING, allowNull: false },

      lyrics: { type: DataTypes.STRING, allowNull: true },

      artist: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Songs",
    }
  );
  return Songs;
};
