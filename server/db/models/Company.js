const Sequelize = require('sequelize');
const conn = require('../conn');

const Company = conn.define('company', {
  name: {
    type: Sequelize.STRING,
  },
});

module.exports = Company;
