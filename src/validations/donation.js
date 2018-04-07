import joi from 'joi';

const constraints = {};

constraints.confirmDonation = joi.object().keys({
  name: joi.string().optional(),
  address: joi.string().optional(),
  phone: joi.string().optional(),
  email: joi.string().email().optional(),
  amount: joi.number().required(),
  image: joi.string().optional(),
});

constraints.createDonation = joi.object().keys({
  name: joi.string().optional(),
  address: joi.string().optional(),
  phone: joi.string().optional(),
  email: joi.string().email().optional(),
  amount: joi.number().required(),
  verified: joi.any().valid(0, 1, '0', '1').required(),
  image: joi.string().optional(),
});

constraints.updateDonation = joi.object().keys({
  name: joi.string().optional(),
  address: joi.string().optional(),
  phone: joi.string().optional(),
  email: joi.string().email().optional(),
  amount: joi.number().optional(),
  verified: joi.any().valid(0, 1, '0', '1').required(),
  image: joi.string().optional(),
});

export default constraints;
