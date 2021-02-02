import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderBaseComponent } from './components/order-base/order-base.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OrderBaseComponent,
    ProductListingComponent
  ],
  exports: [
    OrderBaseComponent,
    ProductListingComponent
  ]
})
export class FeatureProductOrderModule {}
