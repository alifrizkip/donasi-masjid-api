const { Donation } = require('../../src/models');

module.exports = {
  up: queryInterface => queryInterface.createTable(Donation.tableName, Donation.attributes),
  down: queryInterface => queryInterface.dropTable(Donation.tableName),
};
