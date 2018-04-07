const data = [
  {
    key: 'masjid_name',
    value: 'Masjid Jami\' Al Mubarrok',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    key: 'address',
    value: 'RT: 03 RW: 05, Drono, Ngawen, Klaten, Jawa Tengah',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    key: 'amount_target',
    value: '500000000',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    key: 'deadline',
    value: '1577836800',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    key: 'whatsapp',
    value: 'https://api.whatsapp.com/send?phone=628123456789',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    key: 'telegram',
    value: 't.me/donasi-masjid-jami',
    created_at: new Date(),
    updated_at: new Date(),
  }, {
    key: 'website',
    value: 'https://www.masjidjamidrono.co.id',
    created_at: new Date(),
    updated_at: new Date(),
  },
];

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('settings', data, {}),

  down: queryInterface => queryInterface.bulkDelete('settings', null, {}),
};
