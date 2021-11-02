const clothes = (sequelize, DataTypes) => sequelize.define('clothes', {

    jacket: {
      type: DataTypes.STRING,
      allowNull: false
    },
  
    shirts: {
      type: DataTypes.STRING,
    }
  });
  
  module.exports = clothes;