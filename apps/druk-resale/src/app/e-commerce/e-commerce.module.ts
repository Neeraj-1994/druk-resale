import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { ECommerceBaseComponent } from './e-commerce-base/e-commerce-base.component';


@NgModule({
  declarations: [ECommerceBaseComponent],
  imports: [
    CommonModule,
    ECommerceRoutingModule
  ]
})
export class ECommerceModule { }
