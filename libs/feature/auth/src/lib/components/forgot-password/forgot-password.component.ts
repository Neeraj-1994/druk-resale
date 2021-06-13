import { Component, OnInit } from '@angular/core';
import { AuthBaseComponent } from '../auth-base/auth-base.component';
import { Router } from '@angular/router';
import { AuthFacadeService } from '../../services/auth-facade.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'dr-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent extends AuthBaseComponent implements OnInit {

  constructor(public route: Router, public authFacadeService: AuthFacadeService) {
    super(authFacadeService, route);
  }

  ngOnInit(): void {
    this.form = this.fb.forgotPasswordForm();
  }

  resetPassword(): void {
    if (this.form.valid) {
      this.authFacadeService.resetPassword(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

}
