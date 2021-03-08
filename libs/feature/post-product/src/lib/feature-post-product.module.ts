import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPostComponent } from './components/product-post/product-post.component';
import { PostBaseComponent } from './components/post-base/post-base.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RealEstatePostComponent } from './components/real-estate-post/real-estate-post.component';
import { VehiclePostComponent } from './components/vehicle-post/vehicle-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicDetailsComponent } from './components/product-post/basic-details/basic-details.component';
import { DescriptiveInfoComponent } from './components/product-post/descriptive-info/descriptive-info.component';
import { FinancialsComponent } from './components/product-post/financials/financials.component';
import { VisualDescriptionComponent } from './components/product-post/visual-description/visual-description.component';
import { OwnerDetailsComponent } from './components/product-post/owner-details/owner-details.component';
import { FeatureTypeComponent } from './components/product-post/feature-type/feature-type.component';
import { MiscDataComponent } from './components/product-post/misc-data/misc-data.component';
import { PayOutComponent } from './components/product-post/pay-out/pay-out.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ],
  declarations: [
    ProductPostComponent,
    PostBaseComponent,
    RealEstatePostComponent,
    VehiclePostComponent,
    BasicDetailsComponent,
    DescriptiveInfoComponent,
    FinancialsComponent,
    VisualDescriptionComponent,
    OwnerDetailsComponent,
    FeatureTypeComponent,
    MiscDataComponent,
    PayOutComponent
  ],
  exports: [
    ProductPostComponent,
    PostBaseComponent
  ]
})
export class FeaturePostProductModule {}
