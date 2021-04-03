import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'po-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  feature = [
    {
      icon : 'check_circle_outline',
      title: 'Free Shipping',
      label: 'Sed ut perspiciatis unde',
    },
    {
      icon : 'paid_outline',
      title: 'Easy Return',
      label: 'Sed ut perspiciatis unde',
    },
    {
      icon : 'people',
      title: 'Cash On Delivery',
      label: 'Sed ut perspiciatis unde',
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
