const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BorrowRequest = sequelize.define('BorrowRequest', {
  userId: { type: DataTypes.INTEGER, allowNull: false },
  bookId: { type: DataTypes.INTEGER, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'pending' },
});

module.exports = BorrowRequest;
