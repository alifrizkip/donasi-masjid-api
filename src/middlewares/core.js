import joi from 'joi';
import passport from 'passport';
import { BadRequestError, AuthorizationError } from '../../common/errors';

export function apiResponse() {
  return (req, res) => {
    const code = res.statusCode;
    const {
      status = true, message = 'Success', data = {}, meta = {},
    } = req.resData || {};
    return res.json({
      code, status, message, meta, data,
    });
  };
}

export function apiErrorResponse() {
  // eslint-disable-next-line
  return (err, req, res, next) => {
    const { httpStatus, message, previousError } = err;
    res.status(httpStatus || 406).json({
      status: false,
      code: httpStatus || 406,
      message,
      data: previousError,
    });
  };
}

function formatError(message, err) {
  if (err.error) return new BadRequestError(message, err.error.details);
  return undefined;
}
export function formatValidation(rule, message) {
  return (req, res, next) => {
    const err = joi.validate(req.body, rule, { abortEarly: false });
    return next(formatError(message, err));
  };
}

export function auth() {
  return (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
      if (err) return next(err);
      if (!user) return next(new AuthorizationError('Unauthorized'));
      req.user = user;
      return next();
    })(req, res, next);
  };
}

export default {
  apiResponse,
  apiErrorResponse,
};
