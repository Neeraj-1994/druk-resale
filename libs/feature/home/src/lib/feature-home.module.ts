import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeBaseComponent } from './components/home-base/home-base.component';
import { FlexModule } from '@angular/flex-layout';
import { SharedComponentsModule } from '@druk-resale/shared-components';
import { RealEstateHomeComponent } from './components/real-estate-home/real-estate-home.component';
import { VehicleHomeComponent } from './components/vehicle-home/vehicle-home.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    SharedComponentsModule,
    SwiperModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    HomePageComponent,
    HomeBaseComponent,
    RealEstateHomeComponent,
    VehicleHomeComponent
  ],
  exports: [
    HomeBaseComponent,
    HomePageComponent
  ]
})
export class FeatureHomeModule {
}
