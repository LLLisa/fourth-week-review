const Sequelize = require('sequelize');
const conn = require('../conn');

const School = conn.define('school', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    defaultValue: 'No Address on File',
  },
});

module.exports = School;
