import { Component, OnInit } from '@angular/core';
import { AuthBaseComponent } from '../auth-base/auth-base.component';
import { AuthFacadeService } from '../../services/auth-facade.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { UserLogin } from '../../models/auth.model';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AuthBaseComponent implements OnInit {

  constructor(public authFacadeService: AuthFacadeService, public route: Router) {
    super(authFacadeService, route);
  }

  ngOnInit(): void {
    this.form = this.fb.loginForm();
  }

  logInViaGoogle(): void {
    this.authFacadeService.googleSignIn();
  }

  logInViaFacebook(): void {
    this.authFacadeService.facebookSignIn();
  }

  logInViaEmail(userCred: UserLogin = this.form.value): void  {
    this.form.valid ? this.authFacadeService.emailSignIn(userCred) : this.form.markAllAsTouched();
  }

  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

}
