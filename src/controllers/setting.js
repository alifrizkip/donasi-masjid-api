import Service from '../services/setting';
import { Setting } from '../models';

export const SettingController = {};
export default { SettingController };

SettingController.index = async (req, res, next) => {
  const data = await Service.getSetting();
  req.resData = { data };
  return next();
};

SettingController.set = async (req, res, next) => {
  const { key, value } = req.body;
  (await Setting.getKey(key)) ? Setting.updateKey(key, value) : Setting.setKey(key, value);
  const data = { message: 'Settings updated successfully' };
  req.resData = { data };
  return next();
};
