import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as lpn from 'google-libphonenumber';

export const phoneNumberValidator: ValidatorFn = (control: FormControl): ValidationErrors | null =>  {
  const phoneUtil = lpn.PhoneNumberUtil.getInstance();
  let value = ((control.value && control.value.toString()) || '').trim();
  try {
    if (/^00|^[+]/g.test(value)) {
      value = value.replace('00', '+');
    }
    const parsedNumber = value.startsWith('+') || value.startsWith('00') ? phoneUtil.parse(value) : phoneUtil.parse(value, 'CH');
    return parsedNumber && !phoneUtil.isValidNumber(parsedNumber) ? { invalidPhone: true } : null;
  } catch (err) {
    return {invalidPhone: true};
  }
};

export function validateSpace(control: FormControl) {
  const SPACE_REGEXP = /^[^\s]+(\s+[^\s]+)*$/;
  return SPACE_REGEXP.test(control.value) ? null : {
    validateSpace: {
      valid: false
    }
  };
}
