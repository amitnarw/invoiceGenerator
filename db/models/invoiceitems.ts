'use strict';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../dbConnect';

class invoiceitems extends Model {
  declare id: number;
  declare userId: number;
  declare invoiceId: number;
  declare itemTxt: string;
  declare HSNTxt: string;
  declare taxTxt: string;
  declare quantityTxt: string;
  declare rateTxt: string;
  declare amountTxt: string;
}

invoiceitems.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  invoiceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  itemTxt: {
    type: DataTypes.STRING,
  },
  HSNTxt: {
    type: DataTypes.STRING,
  },
  taxDropTxt: {
    type: DataTypes.STRING,
  },
  quantityTxt: {
    type: DataTypes.INTEGER,
  },
  rateTxt: {
    type: DataTypes.INTEGER,
  },
  amountTxt: {
    type: DataTypes.INTEGER,
  },

}, {
  sequelize,
  modelName: 'invoiceitems',
});

export default invoiceitems;