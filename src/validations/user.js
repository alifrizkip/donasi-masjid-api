import joi from 'joi';

const constraints = {};

constraints.createUser = joi.object().keys({
  name: joi.string().required(),
  phone: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().min(3).required(),
  address: joi.string().required(),
  image: joi.string().required(),
});

constraints.updateUser = joi.object().keys({
  name: joi.string().required(),
  phone: joi.string().required(),
  address: joi.string().required(),
  status: joi.any().valid(0, 1, '0', '1'),
  password: joi.any().optional(),
  image: joi.any().optional(),
});

constraints.login = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.required(),
});

export default constraints;
