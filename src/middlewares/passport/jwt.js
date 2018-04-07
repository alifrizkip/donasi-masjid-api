import { Strategy, ExtractJwt } from 'passport-jwt';
import { jwt as jwtOptions } from '../../../config';

import { User } from '../../models';

const jwtParam = {
  secretOrKey: jwtOptions.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

export default new Strategy(jwtParam, async (payload, done) => {
  const user = await User.scope('activeUser').findById(payload.user_id);
  if (user) return done(null, user.serialize());
  return done(null, false);
});
