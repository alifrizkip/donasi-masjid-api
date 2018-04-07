const { User } = require('../../src/models');

module.exports = {
  up: queryInterface => queryInterface.createTable(User.tableName, User.attributes),
  down: queryInterface => queryInterface.dropTable(User.tableName),
};
