import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBaseComponent } from './home-base/home-base.component';
import { FeatureHomeModule, HomePageComponent } from '@druk-resale/feature/home';

const routes: Routes = [
  {
    path: '',
    component: HomeBaseComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FeatureHomeModule],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
