'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    ItemName: DataTypes.STRING,
    Category: DataTypes.STRING,
    CostPrice: DataTypes.INTEGER,
    SellingPrice: DataTypes.INTEGER,
    Picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};