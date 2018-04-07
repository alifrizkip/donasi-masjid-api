import express from 'express';

import { apiResponse, auth } from '../middlewares/core';
import { validateSetKey } from '../middlewares/setting';
import { SettingController } from '../controllers/setting';

const routes = express.Router();

routes.get(
  '/settings',
  SettingController.index,
  apiResponse(),
);

routes.post(
  '/settings/set',
  auth(),
  validateSetKey(),
  SettingController.set,
  apiResponse(),
);

export default routes;
