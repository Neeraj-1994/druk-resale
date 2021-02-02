import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPostComponent } from './components/product-post/product-post.component';
import { PostBaseComponent } from './components/post-base/post-base.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductPostComponent,
    PostBaseComponent
  ],
  exports: [
    ProductPostComponent,
    PostBaseComponent
  ]
})
export class FeaturePostProductModule {}
