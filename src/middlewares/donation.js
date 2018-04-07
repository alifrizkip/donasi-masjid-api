import constraints from '../validations/donation';
import { formatValidation } from './core';

export function validateConfirmDonation() {
  return formatValidation(constraints.confirmDonation, 'Failed confirmation donation');
}

export function validateCreateDonation() {
  return formatValidation(constraints.createDonation, 'Failed create donation');
}

export function validateUpdateDonation() {
  return formatValidation(constraints.updateDonation, 'Failed update donation');
}

export default {
  validateConfirmDonation,
  validateCreateDonation,
  validateUpdateDonation,
};
