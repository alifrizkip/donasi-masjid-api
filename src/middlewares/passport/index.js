import passport from 'passport';
import jwt from './jwt';

function configure(app) {
  passport.use('jwt', jwt);
  app.use(passport.initialize());
}

export default { configure };
