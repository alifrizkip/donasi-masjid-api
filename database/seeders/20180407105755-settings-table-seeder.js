const data = [
  {
    key: 'masjid_name',
    value: 'Masjid Jami\' Al Mubarrok',
  }, {
    key: 'address',
    value: 'RT: 03 RW: 05, Drono, Ngawen, Klaten, Jawa Tengah',
  }, {
    key: 'amount_target',
    value: '500000000',
  }, {
    key: 'deadline',
    value: '1577836800',
  }, {
    key: 'whatsapp',
    value: 'https://api.whatsapp.com/send?phone=628123456789',
  }, {
    key: 'telegram',
    value: 't.me/donasi-masjid-jami',
  }, {
    key: 'website',
    value: 'https://www.masjidjamidrono.co.id',
  },
];

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('settings', data, {}),

  down: queryInterface => queryInterface.bulkDelete('settings', null, {}),
};
