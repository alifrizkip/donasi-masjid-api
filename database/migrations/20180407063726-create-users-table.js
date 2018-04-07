module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    user_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      defaultValue: '',
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      defaultValue: '',
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      defaultValue: '',
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.TEXT,
      defaultValue: '',
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      defaultValue: '',
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING,
      defaultValue: '',
      allowNull: false,
    },
    status: {
      type: Sequelize.TINYINT,
      defaultValue: 1,
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
  down: queryInterface => queryInterface.dropTable('users'),
};
