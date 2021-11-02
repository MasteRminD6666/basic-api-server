'use strict';

const food = (sequelize,DataTypes) => sequelize.define('food',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location:{
        type: DataTypes.STRING,
    },
    foodType: {
        type: DataTypes.STRING,
    },
  
})

module.exports = food 