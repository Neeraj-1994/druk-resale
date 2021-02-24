import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPostComponent } from './components/product-post/product-post.component';
import { PostBaseComponent } from './components/post-base/post-base.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RealEstatePostComponent } from './components/real-estate-post/real-estate-post.component';
import { VehiclePostComponent } from './components/vehicle-post/vehicle-post.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    ProductPostComponent,
    PostBaseComponent,
    RealEstatePostComponent,
    VehiclePostComponent
  ],
  exports: [
    ProductPostComponent,
    PostBaseComponent
  ]
})
export class FeaturePostProductModule {}
