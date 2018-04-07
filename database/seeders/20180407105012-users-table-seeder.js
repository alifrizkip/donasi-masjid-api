import { User } from '../../src/models';

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('users', [{
    name: 'Admin',
    phone: '085723456789',
    email: 'admin@example.com',
    password: User.hashPasswordSync('password'),
    address: 'Drono, Ngawen, Klaten',
    image: 'user.jpeg',
    status: 1,
  }, {
    name: 'Takmir',
    phone: '085723456789',
    email: 'takmir@example.com',
    password: User.hashPasswordSync('password'),
    address: 'Drono, Ngawen, Klaten',
    image: 'user.jpeg',
    status: 1,
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};
