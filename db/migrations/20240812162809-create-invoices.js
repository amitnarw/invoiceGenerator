'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      logo: {
        type: Sequelize.STRING
      },
      whoIsThisFrom: {
        type: Sequelize.STRING
      },
      billTo: {
        type: Sequelize.STRING
      },
      whoIsThisTo: {
        type: Sequelize.STRING
      },
      shipTo: {
        type: Sequelize.STRING
      },
      shipToTxt: {
        type: Sequelize.STRING
      },
      placeOfSupply: {
        type: Sequelize.STRING
      },
      invoice: {
        type: Sequelize.STRING
      },
      page: {
        type: Sequelize.INTEGER
      },
      pageSymbol: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      dateTxt: {
        type: Sequelize.STRING
      },
      paymentTerms: {
        type: Sequelize.STRING
      },
      paymentTermsTxt: {
        type: Sequelize.STRING
      },
      dueDate: {
        type: Sequelize.STRING
      },
      dueDateTxt: {
        type: Sequelize.STRING
      },
      poNumber: {
        type: Sequelize.STRING
      },
      poNumberTxt: {
        type: Sequelize.INTEGER
      },
      item: {
        type: Sequelize.STRING
      },
      HSN: {
        type: Sequelize.STRING
      },
      tax: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      rate: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
      itemTxt: {
        type: Sequelize.STRING
      },
      HSNTxt: {
        type: Sequelize.STRING
      },
      taxTxt: {
        type: Sequelize.STRING
      },
      quantityTxt: {
        type: Sequelize.STRING
      },
      rateTxt: {
        type: Sequelize.STRING
      },
      amountTxt: {
        type: Sequelize.STRING
      },
      paymentDetails: {
        type: Sequelize.STRING
      },
      paymentDetailsTxt: {
        type: Sequelize.STRING
      },
      terms: {
        type: Sequelize.STRING
      },
      termsTxt: {
        type: Sequelize.STRING
      },
      subtotal: {
        type: Sequelize.STRING
      },
      subtotalTxt: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.STRING
      },
      discountTxt: {
        type: Sequelize.INTEGER
      },
      discountSymbol: {
        type: Sequelize.STRING
      },
      shipping: {
        type: Sequelize.STRING
      },
      shippingTxt: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.STRING
      },
      totalTxt: {
        type: Sequelize.INTEGER
      },
      amountPaid: {
        type: Sequelize.STRING
      },
      amountPaidTxt: {
        type: Sequelize.INTEGER
      },
      balanceDue: {
        type: Sequelize.STRING
      },
      balanceDueTxt: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('invoices');
  }
};