'use strict'

const POSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');



let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};


let sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);



const food = require('./food.model');
const clothes = require('./clothes.model');



module.exports = {
  db: sequelize,
  food: food(sequelize, DataTypes), 
  clothes: clothes(sequelize, DataTypes)
};