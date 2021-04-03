import { Component } from '@angular/core';
import { NgxImgZoomService } from 'ngx-img-zoom';

@Component({
  selector: 'po-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  previewImageSrc = 'https://images.unsplash.com/photo-1617396482401-0fdd3d95c5d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';
  zoomImageSrc = 'https://images.unsplash.com/photo-1617396482401-0fdd3d95c5d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';

  feature = [
    {
      icon: 'check_circle_outline',
      title: 'Free Shipping',
      label: 'Sed ut perspiciatis unde'
    },
    {
      icon: 'paid_outline',
      title: 'Easy Return',
      label: 'Sed ut perspiciatis unde'
    },
    {
      icon: 'people',
      title: 'Cash On Delivery',
      label: 'Sed ut perspiciatis unde'
    }
  ];

  constructor(private ngxImgZoom: NgxImgZoomService) {
    this.ngxImgZoom.setZoomBreakPoints([
      { w: 100, h: 100 },
      { w: 150, h: 150 },
      { w: 200, h: 200 },
      { w: 250, h: 250 },
      { w: 300, h: 300 }]);
  }


}
