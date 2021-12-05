import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  FeatureAuthModule,
  ForgotPasswordComponent,
  LoginComponent,
  RegisterComponent
} from '@druk-resale/feature/auth';
import { AuthBaseComponent } from '@druk-resale/apps/auth/auth-base/auth-base.component';
import { AuthBackgroundComponent } from '../../../../../libs/feature/auth/src/lib/components/auth-background/auth-background.component';

const routes: Routes = [
  {
    path: '',
    component: AuthBaseComponent,
    children: [
      {
        path: 'register',
        component: AuthBackgroundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FeatureAuthModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
