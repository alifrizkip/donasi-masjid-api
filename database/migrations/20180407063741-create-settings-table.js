module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('settings', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    key: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    value: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE(),
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE(),
      allowNull: false,
    },
  }),
  down: queryInterface => queryInterface.dropTable('settings'),
};
