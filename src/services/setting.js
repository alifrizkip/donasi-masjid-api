import moment from 'moment';
import { Setting, Donation } from '../models';

export const SettingService = {};
export default SettingService;

const getDiffDay = (date) => {
  const now = moment();
  const deadline = moment.unix(parseInt(date, 10));
  return deadline.diff(now, 'days');
};

SettingService.getSetting = async () => {
  const data = {};
  (await Setting.findAll()).map(setting => data[setting.key] = setting.value);

  const totalDonation = await Donation.totalVerified({ verified: 1 });

  data.amount_target = parseInt(data.amount_target, 10);
  data.deadline = getDiffDay(data.deadline);
  data.total_donor = totalDonation.donor;
  data.total_amount = totalDonation.amount;
  data.amount_lack = parseInt(data.amount_target, 10) - data.total_amount;
  return data;
};
