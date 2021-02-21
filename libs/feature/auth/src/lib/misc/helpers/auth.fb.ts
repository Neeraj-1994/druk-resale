import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import {
  PasswordValidator,
  phoneNumberValidator,
  validateSpace
} from '../validators/auth.validator';
import { ForgotPassword, UserLogin, User } from '@druk-resale/shared-components';

@Injectable()
export class AuthFormBuilder {

  constructor(private fb: FormBuilder) {
  }

  registerForm(): FormGroup {
    const form = this.fb.group({
      ...new User()
    }, {validators: PasswordValidator})

    form.get('first_name').setValidators([Validators.required, validateSpace]);
    form.get('last_name').setValidators([Validators.required, validateSpace]);
    form.get('email').setValidators([Validators.required, Validators.email]);
    form.get('phone').setValidators([Validators.required, phoneNumberValidator]);
    form.get('password').setValidators([Validators.required]);
    form.get('confirm_password').setValidators(Validators.required);

    return form;
  }

  loginForm(): FormGroup {
    const form = this.fb.group({
      ...new UserLogin()
    })

    form.get('email').setValidators([Validators.required, Validators.email]);
    form.get('password').setValidators([Validators.required]);

    return form;
  }

  forgotPasswordForm(): FormGroup {
    const form = this.fb.group({
      ...new ForgotPassword()
    })

    form.get('email').setValidators([Validators.required]);

    return form;
  }
}
