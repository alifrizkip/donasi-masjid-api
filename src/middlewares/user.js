import passport from 'passport';

import constraints from '../validations/user';
import { formatValidation } from './core';

import { AuthorizationError } from '../../common/errors';

export function validateCreateUser() {
  return formatValidation(constraints.createUser, 'Failed create user');
}

export function validateUpdateUser() {
  return formatValidation(constraints.updateUser, 'Failed update user');
}

export function validateLogin() {
  return formatValidation(constraints.login, 'Failed login');
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
  validateCreateUser,
  validateUpdateUser,
  validateLogin,
};
