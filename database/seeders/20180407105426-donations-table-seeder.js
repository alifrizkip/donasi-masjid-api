const data = [];
Array.from(Array(500).keys()).map((n) => {
  data.push({
    name: `Hamba Alloh ${n}`,
    address: 'Bumi Alloh',
    phone: '10101010',
    email: `hamba_alloh${n}@example.com`,
    amount: 1000 * (n + 1),
    verified: 1,
    image: '',
    created_at: new Date(),
    updated_at: new Date(),
  });
});

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('donations', data, {}),

  down: queryInterface => queryInterface.bulkDelete('donations', null, {}),
};
