const { Setting } = require('../../src/models');

module.exports = {
  up: queryInterface => queryInterface.createTable(Setting.tableName, Setting.attributes),
  down: queryInterface => queryInterface.dropTable(Setting.tableName),
};
