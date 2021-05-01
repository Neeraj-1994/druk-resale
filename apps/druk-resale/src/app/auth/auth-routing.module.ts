import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  FeatureAuthModule,
  ForgotPasswordComponent,
  LoginComponent,
  RegisterComponent
} from '@druk-resale/feature/auth';
import { AuthBaseComponent } from '@druk-resale/apps/auth/auth-base/auth-base.component';

const routes: Routes = [
  {
    path: '',
    component: AuthBaseComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FeatureAuthModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
