import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

import config from '../config';
import passport from './middlewares/passport';
import { apiErrorResponse } from './middlewares/core';
import userRoutes from './routes/user';
import donationRoutes from './routes/donation';
import settingRoutes from './routes/setting';

const app = express();

app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(cors());
app.use(helmet());
app.use(express.static(config.publicPath, { maxAge: 31557600000 }));

passport.configure(app);

app.use(userRoutes);
app.use(donationRoutes);
app.use(settingRoutes);

app.use((req, res, next) => {
  const err = new Error('URL Not Found');
  err.httpStatus = 404;
  next(err);
});

app.use(apiErrorResponse());

export default app;
