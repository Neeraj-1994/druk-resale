import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdPostBaseComponent } from '@druk-resale/apps/ad-post/ad-post-base/ad-post-base.component';
import { FeaturePostProductModule, ProductPostComponent } from '@druk-resale/feature/post-product';

const routes: Routes = [
  {
    path: '',
    component: AdPostBaseComponent,
    children: [
      {
        path: 'ads',
        component: ProductPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FeaturePostProductModule],
  exports: [RouterModule]
})
export class AdPostRoutingModule { }
