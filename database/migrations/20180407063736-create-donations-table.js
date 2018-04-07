module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('donations', {
    donation_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      defaultValue: 'HAMBA ALLOH',
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      defaultValue: 'BUMI ALLOH',
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      defaultValue: '',
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      defaultValue: 'hamba_alloh@mail.com',
      allowNull: false,
    },
    amount: {
      type: Sequelize.BIGINT,
      defaultValue: 0,
      allowNull: false,
    },
    verified: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      defaultValue: '',
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
    deleted_at: {
      type: Sequelize.DATE(),
      allowNull: true,
    },
  }),
  down: queryInterface => queryInterface.dropTable('donations'),
};
