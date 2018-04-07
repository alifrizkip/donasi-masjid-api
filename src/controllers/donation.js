import shortid from 'shortid';
import slug from 'slug';
import sharp from 'sharp';

import { Donation } from '../models';
import config from '../../config';
import { deleteImage } from '../helpers';

import { successMsg, errMsg } from '../messages/donation';
import { DonationService } from '../services/donation';
import { NotFoundError } from '../../common/errors';

export const DonationController = {};
export default DonationController;

DonationController.allVerified = async (req, res, next) => {
  const { page, limit } = req.query;
  const { meta, data } = await DonationService.verifiedDonation({ page, limit });
  req.resData = { meta, data };
  return next();
};

DonationController.all = async (req, res, next) => {
  const { page, limit, search, status } = req.query;
  const props = { page, limit, search, status };
  const { meta, donations } = await DonationService.getAllPaginate(props);
  req.resData = { meta, data: donations };
  return next();
};

DonationController.upload = (req, res, next) => {
  if (!req.body.image) return next();
  const base64 = req.body.image.split(';base64,');
  const extension = base64[0].split('/').pop();
  const filename = slug(`${req.body.name}-${shortid.generate()}`);
  req.body.image = `${filename}.${extension}`;
  sharp(Buffer.from(base64[1], 'base64')).toFile(`${config.imagePath}/${req.body.image}`);
  return next();
};

DonationController.create = async (req, res, next) => {
  Donation.create(req.body);
  req.resData = { message: successMsg.create };
  return next();
};

DonationController.update = async (req, res, next) => {
  const data = req.body;
  const donation = await Donation.findById(req.params.donation_id);
  if (!donation) {
    deleteImage(`${config.imagePath}/${req.body.image}`);
    return next(new NotFoundError(errMsg.donation_not_found));
  }
  if (data.image) deleteImage(`${config.imagePath}/${donation.get('image')}`);
  Donation.update(data, { where: { donation_id: req.params.donation_id } });
  req.resData = { message: successMsg.update };
  return next();
};

DonationController.delete = async (req, res, next) => {
  const donation = await Donation.findById(req.params.donation_id);
  if (!donation) return next(new NotFoundError(errMsg.donation_not_found));
  deleteImage(`${config.imagePath}/${donation.get('image')}`);
  Donation.destroy({ where: { donation_id: req.params.donation_id } });
  req.resData = { message: successMsg.delete };
  return next();
};
