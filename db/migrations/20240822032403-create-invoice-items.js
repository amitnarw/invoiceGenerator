'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('invoiceitems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      invoiceId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      itemTxt: {
        allowNull: false,
        type: Sequelize.STRING
      },
      HSNTxt: {
        type: Sequelize.STRING
      },
      taxTxt: {
        type: Sequelize.STRING
      },
      quantityTxt: {
        type: Sequelize.INTEGER
      },
      rateTxt: {
        type: Sequelize.INTEGER
      },
      amountTxt: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('invoiceitems');
  }
};