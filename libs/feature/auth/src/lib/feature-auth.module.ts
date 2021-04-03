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
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { FailurePageComponent } from './components/failure-page/failure-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@druk-resale/shared-components';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AuthBaseComponent,
    SuccessPageComponent,
    FailurePageComponent
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AuthBaseComponent
  ]
})
export class FeatureAuthModule {}
