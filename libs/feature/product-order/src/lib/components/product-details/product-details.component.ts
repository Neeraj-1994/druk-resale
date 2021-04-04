import { Component, Input, OnInit } from '@angular/core';
import { ProductFacadeService } from '../../services/product-facade.service';
import { Router } from '@angular/router';
import { ProductList } from '../../../../../home/src/lib/models/product-list.model';

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

  productDetails: ProductList;
  constructor(public productFacadeService: ProductFacadeService, private route: Router) {
  }

  ngOnInit(): void {
    this.productDetails = this.productFacadeService.getProductDetailedState();
  }

}
