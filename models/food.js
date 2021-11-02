const food = (sequelize, DataTypes) => sequelize.define('Food', {

  Apple: {
    type: DataTypes.STRING,
    allowNull: false
  },

  Orange: {
    type: DataTypes.STRING,
  }
});

module.exports = food;