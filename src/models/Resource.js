const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Resource = sequelize.define(
  'Resource',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    youtubeUrl: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Resource;
