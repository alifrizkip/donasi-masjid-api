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
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    name: 'Takmir',
    phone: '085723456789',
    email: 'takmir@example.com',
    password: User.hashPasswordSync('password'),
    address: 'Drono, Ngawen, Klaten',
    image: 'user.jpeg',
    status: 1,
    created_at: new Date(),
    updated_at: new Date(),
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};
