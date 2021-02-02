import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthBaseComponent } from './components/auth-base/auth-base.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AuthBaseComponent
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AuthBaseComponent
  ]
})
export class FeatureAuthModule {}
