import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthBaseComponent } from './components/auth-base/auth-base.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@druk-resale/shared-components';
import { AuthBackgroundComponent } from './components/auth-background/auth-background.component';
import { ContentPageComponent } from './components/content-page/content-page.component';
import { AdPageComponent } from './components/ad-page/ad-page.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
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
    AuthBackgroundComponent,
    ContentPageComponent,
    AdPageComponent,
    SocialLoginComponent
  ],
  exports: [
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AuthBaseComponent
  ]
})
export class FeatureAuthModule {}
