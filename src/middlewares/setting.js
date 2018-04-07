import constraints from '../validations/setting';
import { formatValidation } from './core';

export function validateSetKey() {
  return formatValidation(constraints.setKey, 'Failed set key');
}

export default {
  validateSetKey,
};
