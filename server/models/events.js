'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  events.init({
    name: {
      type : DataTypes.STRING,
      allowNull : false
    },
    mainLink:{
      type : DataTypes.STRING,
      allowNull : false
    }, 
    imageLink: {
      type : DataTypes.STRING,
      allowNull : false
    }, 
    logoLink: {
      type : DataTypes.STRING,
      allowNull : false
    }, 
    eventDate: {
      type : DataTypes.STRING,
      allowNull : false
    }, 
    startDate: {
      type : DataTypes.STRING,
      allowNull : false
    }, 
    endDate: {
      type : DataTypes.STRING,
      allowNull : false
    }, 
    city: {
      type : DataTypes.STRING,
      allowNull : false
    }, 
    state: {
      type : DataTypes.STRING,
      allowNull : false
    }, 
    eventNotes: {
      type : DataTypes.STRING,
      allowNull : false
    }, 
    status: {
      type: DataTypes.ENUM,
      allowNull:false,
      values : ['UPCOMING','PAST']
    }
  }, {
    sequelize,
    modelName: 'events',
  });
  return events;
};