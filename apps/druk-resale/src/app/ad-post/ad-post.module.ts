import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdPostRoutingModule } from './ad-post-routing.module';
import { AdPostBaseComponent } from './ad-post-base/ad-post-base.component';


@NgModule({
  declarations: [
    AdPostBaseComponent
  ],
  imports: [
    CommonModule,
    AdPostRoutingModule
  ]
})
export class AdPostModule { }
