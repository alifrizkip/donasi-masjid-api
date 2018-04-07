require('dotenv').config();
const path = require('path');

const config = {};

config.env = process.env.NODE_ENV || 'development';
process.env.NODE_ENV = config.env;

config.host = 'localhost';
config.port = 5080;
config.imagePath = path.join(__dirname, '..', 'public', 'uploads', 'images');
config.publicPath = path.join(__dirname, '..', 'public');

config.imageUrlPath = '/uploads/images';

config.sequelize = {};
config.sequelize.debug = console.log;
config.sequelize.host = process.env.DB_HOST;
config.sequelize.database = process.env.DB_NAME;
config.sequelize.username = process.env.DB_USER;
config.sequelize.password = process.env.DB_PASS;
config.sequelize.dialect = process.env.DB_DIALECT || 'mysql';
config.sequelize.storage = path.join(__dirname, '..', 'database', 'donasi_masjid.sqlite');
config.sequelize.port = process.env.DB_PORT || 3306;
config.sequelize.seederStorage = 'sequelize';
config.sequelize.define = {
  charset: 'utf8mb4',
  dialectOptions: {
    collate: 'utf8mb4_unicode_ci',
  },
};

config.jwt = {};
config.jwt.secret = process.env.JWT_SECRET || 'it is very very secret';
config.jwt.expire = '7d';

module.exports = config;
