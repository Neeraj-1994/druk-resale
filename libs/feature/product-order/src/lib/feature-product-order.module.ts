import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderBaseComponent } from './components/order-base/order-base.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FlexModule } from '@angular/flex-layout';
import { SharedComponentsModule } from '@druk-resale/shared-components';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    SharedComponentsModule
  ],
  declarations: [
    OrderBaseComponent,
    ProductListingComponent,
    ProductDetailsComponent
  ],
  exports: [
    OrderBaseComponent,
    ProductListingComponent,
    ProductDetailsComponent
  ]
})
export class FeatureProductOrderModule {}
