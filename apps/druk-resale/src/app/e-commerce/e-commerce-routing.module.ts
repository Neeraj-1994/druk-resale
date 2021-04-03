import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ECommerceBaseComponent } from './e-commerce-base/e-commerce-base.component';
import {
  FeatureProductOrderModule,
  ProductDetailsComponent,
  ProductListingComponent
} from '@druk-resale/feature/product-order';

const routes: Routes = [
  {
    path: '',
    component: ECommerceBaseComponent,
    children: [
      {
        path: 'list',
        component: ProductListingComponent
      },
      {
        path: 'details',
        component: ProductDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FeatureProductOrderModule],
  exports: [RouterModule]
})
export class ECommerceRoutingModule { }
