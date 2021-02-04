import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthBaseComponent } from './components/auth-base/auth-base.component';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, FlexModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule],
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
