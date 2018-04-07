import { Donation } from '../models';

export const DonationService = {};
export default { DonationService };

DonationService.verifiedDonation = async ({ page, limit }) => {
  page = (page) ? parseInt(page, 0) : 1;
  limit = (limit) ? parseInt(limit, 0) : 20;
  const where = { verified: 1 };
  const order = [['amount', 'DESC']];
  let donations = Donation.findAndCountAll({ where, order, page, limit });
  let total = Donation.totalVerified(where);
  [donations, total] = await Promise.all([donations, total]);
  return {
    meta: { page, limit, total: donations.count },
    data: {
      total_amount: total.amount,
      total_donor: total.donor,
      donations: donations.rows,
    },
  };
};

DonationService.getAllPaginate = async (props) => {
  const { search, status } = props;
  let { page, limit } = props;

  page = (page) ? parseInt(page, 0) : 1;
  limit = (limit) ? parseInt(limit, 0) : 20;
  const where = (search) ? {
    $or: [{
      name: { $like: `%${search}%` },
    }, {
      address: { $like: `%${search}%` },
    }, {
      phone: { $like: `%${search}%` },
    }, {
      email: { $like: `%${search}%` },
    }],
  } : {};
  if (status) where.verified = status;
  const offset = parseInt((limit * page) - limit, 0);
  const donations = await Donation.findAndCountAll({ where, offset, limit, order: [['created_at', 'DESC']] });
  return {
    meta: { page, limit, total: donations.count },
    donations: donations.rows,
  };
};
