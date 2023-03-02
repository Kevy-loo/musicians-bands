const {Sequelize, sequelize} = require('./db');
const { DataTypes } = require('sequelize')


let Musician = sequelize.define('musician', {
    name: DataTypes.STRING,
    instrument: DataTypes.STRING  
  });

module.exports = {
    Musician
};