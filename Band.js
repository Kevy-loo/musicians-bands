const {Sequelize, sequelize} = require('./db');
const { DataTypes } = require('sequelize')

let Band = sequelize.define('band', {
  name: DataTypes.STRING,
  genre: DataTypes.STRING  
});

module.exports = {
    Band
};