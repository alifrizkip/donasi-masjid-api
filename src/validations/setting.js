import joi from 'joi';

const constraints = {};

constraints.setKey = joi.object().keys({
  key: joi.string().required(),
  value: joi.string().required(),
});

export default constraints;
