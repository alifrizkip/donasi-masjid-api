import express from 'express';

import { apiResponse, auth } from '../middlewares/core';
import { validateCreateUser, validateUpdateUser, validateLogin } from '../middlewares/user';
import { UserController } from '../controllers/user';


const routes = express.Router();

/** Login */
routes.post(
  '/login',
  validateLogin(),
  UserController.auth,
  apiResponse(),
);

/** All User */
routes.get(
  '/users',
  auth(),
  UserController.index,
  apiResponse(),
);

/** A User */
routes.get(
  '/users/:user_id([0-9]{1,10})',
  auth(),
  UserController.get,
  apiResponse(),
);

/** New User */
routes.post(
  '/users',
  auth(),
  validateCreateUser(),
  UserController.upload,
  UserController.create,
  apiResponse(),
);

/** Update User */
routes.put(
  '/users/:user_id([0-9]{1,10})',
  auth(),
  validateUpdateUser(),
  UserController.upload,
  UserController.update,
  apiResponse(),
);

/** Delete User */
routes.delete(
  '/users/:user_id([0-9]{1,10})',
  auth(),
  UserController.delete,
  apiResponse(),
);

/** Profile */
routes.get(
  '/profile',
  auth(),
  (req, res, next) => {
    req.resData = { data: req.user };
    return next();
  },
  apiResponse(),
);

export default routes;
