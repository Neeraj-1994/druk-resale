import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderBaseComponent } from './components/order-base/order-base.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FlexModule } from '@angular/flex-layout';
import { SharedComponentsModule } from '@druk-resale/shared-components';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxImgZoomModule } from 'ngx-img-zoom';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    SharedComponentsModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    NgxImgZoomModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    SwiperModule
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
