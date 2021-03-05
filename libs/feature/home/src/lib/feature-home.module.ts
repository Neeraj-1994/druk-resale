import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeBaseComponent } from './components/home-base/home-base.component';
import { FlexModule } from '@angular/flex-layout';
import { SharedComponentsModule } from '@druk-resale/shared-components';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    SharedComponentsModule,
    MatCarouselModule
  ],
  declarations: [
    HomePageComponent,
    HomeBaseComponent
  ],
  exports: [
    HomeBaseComponent,
    HomePageComponent
  ]
})
export class FeatureHomeModule {}
