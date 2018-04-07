import express from 'express';

import { apiResponse, auth } from '../middlewares/core';
import { validateConfirmDonation, validateCreateDonation, validateUpdateDonation } from '../middlewares/donation';
import { DonationController } from '../controllers/donation';


const routes = express.Router();

/** Get Verified Donation */
routes.get(
  '/donations',
  DonationController.allVerified,
  apiResponse(),
);

/** Get All Donation */
routes.get(
  '/donations/all',
  auth(),
  DonationController.all,
  apiResponse(),
);

/** Confirm Donation */
routes.post(
  '/donations/confirm',
  validateConfirmDonation(),
  DonationController.upload,
  DonationController.create,
  apiResponse(),
);

/** Create Donation */
routes.post(
  '/donations',
  auth(),
  validateCreateDonation(),
  DonationController.upload,
  DonationController.create,
  apiResponse(),
);

/** Update Donation */
routes.put(
  '/donations/:donation_id([0-9]{1,10})',
  auth(),
  validateUpdateDonation(),
  DonationController.upload,
  DonationController.update,
  apiResponse(),
);

/** Delete Donation */
routes.delete(
  '/donations/:donation_id([0-9]{1,10})',
  auth(),
  DonationController.delete,
  apiResponse(),
);

export default routes;
