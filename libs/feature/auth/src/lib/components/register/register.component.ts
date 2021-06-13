import { Component, OnInit } from '@angular/core';
import { AuthBaseComponent } from '../auth-base/auth-base.component';
import { Router } from '@angular/router';
import { AuthFacadeService } from '../../services/auth-facade.service';
import { FormControl } from '@angular/forms';
import { User } from '../../models/auth.model';

@Component({
  selector: 'dr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends AuthBaseComponent implements OnInit {

  constructor(public route: Router, public authFacadeService: AuthFacadeService) {
    super(authFacadeService, route);
  }

  ngOnInit(): void {
    this.form = this.fb.registerForm();
  }

  registerUser(user: User = this.form.value): void {
    this.form.valid ? this.authFacadeService.emailRegister(user) : this.form.markAllAsTouched();
  }

  get firstName(): FormControl {
    return this.form.get('first_name') as FormControl;
  }

  get lastName(): FormControl {
    return this.form.get('last_name') as FormControl;
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get phone(): FormControl {
    return this.form.get('phone') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.form.get('confirm_password') as FormControl;
  }
}
