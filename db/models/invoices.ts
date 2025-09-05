'use strict';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../dbConnect';

class invoices extends Model {
  declare id: number;
  declare userId: number;
  declare logo: string;
  declare whoIsThisFrom: string;
  declare billTo: string;
  declare billToTxt: string;
  declare shipTo: string;
  declare shipToTxt: string;
  declare placeOfSupply: string;
  declare invoice: string;
  declare page: string;
  declare pageSymbol: string;
  declare date: string;
  declare dateTxt: string;
  declare paymentTerms: string;
  declare paymentTermsTxt: string;
  declare dueDate: string;
  declare dueDateTxt: string;
  declare poNumber: string;
  declare poNumberTxt: string;
  declare item: string;
  declare HSN: string;
  declare taxDrop: string;
  declare quantity: string;
  declare rate: string;
  declare amount: string;
  declare paymentDetails: string;
  declare paymentDetailsTxt: string;
  declare terms: string;
  declare termsTxt: string;
  declare subtotal: string;
  declare subtotalTxt: string;
  declare discount: string;
  declare discountTxt: string;
  declare discountType: string;
  declare shipping: string;
  declare shippingTxt: string;
  declare total: string;
  declare totalTxt: string;
  declare amountPaid: string;
  declare amountPaidTxt: string;
  declare balanceDue: string;
  declare balanceDueTxt: string;
}

invoices.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  userId: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  logo: {
    type: DataTypes.STRING,
  },
  currency: {
    type: DataTypes.STRING,
  },
  whoIsThisFrom: {
    type: DataTypes.STRING,
  },
  billTo: {
    type: DataTypes.STRING,
  },
  whoIsThisTo: {
    type: DataTypes.STRING,
  },
  shipTo: {
    type: DataTypes.STRING,
  },
  shipToTxt: {
    type: DataTypes.STRING,
  },
  placeOfSupply: {
    type: DataTypes.STRING,
  },
  invoice: {
    type: DataTypes.STRING,
  },
  page: {
    type: DataTypes.INTEGER,
  },
  pageSymbol: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.STRING,
  },
  dateTxt: {
    type: DataTypes.STRING,
  },
  paymentTerms: {
    type: DataTypes.STRING,
  },
  paymentTermsTxt: {
    type: DataTypes.STRING,
  },
  dueDate: {
    type: DataTypes.STRING,
  },
  dueDateTxt: {
    type: DataTypes.STRING,
  },
  poNumber: {
    type: DataTypes.INTEGER,
  },
  poNumberTxt: {
    type: DataTypes.INTEGER,
  },
  item: {
    type: DataTypes.STRING,
  },
  HSN: {
    type: DataTypes.STRING,
  },
  taxDrop: {
    type: DataTypes.STRING,
  },
  quantity: {
    type: DataTypes.STRING,
  },
  rate: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.STRING,
  },
  paymentDetails: {
    type: DataTypes.STRING,
  },
  paymentDetailsTxt: {
    type: DataTypes.STRING,
  },
  terms: {
    type: DataTypes.STRING,
  },
  termsTxt: {
    type: DataTypes.STRING,
  },
  subtotal: {
    type: DataTypes.STRING,
  },
  subtotalTxt: {
    type: DataTypes.INTEGER,
  },
  discount: {
    type: DataTypes.STRING,
  },
  discountTxt: {
    type: DataTypes.INTEGER,
  },
  discountType: {
    type: DataTypes.STRING,
  },
  shipping: {
    type: DataTypes.STRING,
  },
  shippingTxt: {
    type: DataTypes.INTEGER,
  },
  total: {
    type: DataTypes.STRING,
  },
  totalTxt: {
    type: DataTypes.INTEGER,
  },
  amountPaid: {
    type: DataTypes.STRING,
  },
  amountPaidTxt: {
    type: DataTypes.INTEGER,
  },
  balanceDue: {
    type: DataTypes.STRING,
  },
  balanceDueTxt: {
    type: DataTypes.STRING,
  },

}, {
  sequelize,
  modelName: 'invoices',
});

export default invoices;