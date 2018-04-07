import jwt from 'jsonwebtoken';
import sharp from 'sharp';
import shortid from 'shortid';
import slug from 'slug';

import { User } from '../models';
import config from '../../config';
import { deleteImage } from '../helpers';

import { successMsg, errMsg } from '../messages/user';

import { NotFoundError, BadRequestError, AuthenticationError } from '../../common/errors';

export const UserController = {};
export default { UserController };

UserController.auth = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.getByEmail(email);
  if (!user) return next(new NotFoundError(errMsg.user_not_found));
  if (!user.verifyPassword(password)) return next(new AuthenticationError(errMsg.incorrect_password));
  const payload = { user_id: user.get('user_id') };
  const token = jwt.sign(payload, config.jwt.secret, { expiresIn: config.jwt.expire });
  req.resData = { data: { token } };
  return next();
};

UserController.index = async (req, res, next) => {
  const users = await User.getAll();
  req.resData = { data: users, meta: { image_path: config.imageUrlPath } };
  return next();
};

UserController.get = async (req, res, next) => {
  const user = await User.findById(req.params.user_id);
  if (!user) return next(new NotFoundError(errMsg.user_not_found));
  req.resData = { data: user.serialize() };
  return next();
};

UserController.upload = (req, res, next) => {
  if (!req.body.image) return next();
  const base64 = req.body.image.split(';base64,');
  const extension = base64[0].split('/').pop();
  const filename = slug(`${req.body.name}-${shortid.generate()}`);
  req.body.image = `${filename}.${extension}`;
  sharp(Buffer.from(base64[1], 'base64')).resize(500).toFile(`${config.imagePath}/${req.body.image}`);
  return next();
};

UserController.create = async (req, res, next) => {
  const data = req.body;
  if (await User.getByEmail(data.email)) {
    deleteImage(`${config.imagePath}/${req.body.image}`);
    return next(new BadRequestError(errMsg.email_registered));
  }
  data.password = User.hashPasswordSync(data.password);
  User.create(data);
  req.resData = { message: successMsg.create };
  return next();
};

UserController.update = async (req, res, next) => {
  const data = req.body;
  const user = await User.findById(req.params.user_id);
  if (!user) {
    deleteImage(`${config.imagePath}/${req.body.image}`);
    return next(new NotFoundError(errMsg.user_not_found));
  }
  if (data.password) data.password = User.hashPasswordSync(data.password);
  if (data.image) deleteImage(`${config.imagePath}/${user.get('image')}`);
  User.update(data, { where: { user_id: req.params.user_id } });
  req.resData = { message: successMsg.update };
  return next();
};

UserController.delete = async (req, res, next) => {
  const user = await User.findById(req.params.user_id);
  if (!user) return next(new NotFoundError(errMsg.user_not_found));
  User.destroy({ where: { user_id: req.params.user_id } });
  req.resData = { message: successMsg.delete };
  return next();
};
