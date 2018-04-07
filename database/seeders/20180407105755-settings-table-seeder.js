const data = [
  {
    key: 'masjid_name',
    value: 'Masjid Jami\' Al Mubarrok',
    created_at: Date.now(),
    updated_at: Date.now(),
  }, {
    key: 'address',
    value: 'RT: 03 RW: 05, Drono, Ngawen, Klaten, Jawa Tengah',
    created_at: Date.now(),
    updated_at: Date.now(),
  }, {
    key: 'amount_target',
    value: '500000000',
    created_at: Date.now(),
    updated_at: Date.now(),
  }, {
    key: 'deadline',
    value: '1577836800',
    created_at: Date.now(),
    updated_at: Date.now(),
  }, {
    key: 'whatsapp',
    value: 'https://api.whatsapp.com/send?phone=628123456789',
    created_at: Date.now(),
    updated_at: Date.now(),
  }, {
    key: 'telegram',
    value: 't.me/donasi-masjid-jami',
    created_at: Date.now(),
    updated_at: Date.now(),
  }, {
    key: 'website',
    value: 'https://www.masjidjamidrono.co.id',
    created_at: Date.now(),
    updated_at: Date.now(),
  },
];

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('settings', data, {}),

  down: queryInterface => queryInterface.bulkDelete('settings', null, {}),
};
