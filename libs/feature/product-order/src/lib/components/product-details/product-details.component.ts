import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { ProductFacadeService } from '../../services/product-facade.service';
import { Router } from '@angular/router';
import { ProductList } from '../../../../../home/src/lib/models/product-list.model';
import { NgxImgZoomService } from 'ngx-img-zoom';
import { SwiperConfigInterface, SwiperNavigationInterface } from 'ngx-swiper-wrapper';

import { Observable } from 'rxjs';
import { ProductStoreState } from '../../services/product-state.service';

@Component({
  selector: 'po-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, AfterViewInit {

  previewImageSrc = 'https://images.unsplash.com/photo-1617396482401-0fdd3d95c5d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';
  zoomImageSrc = 'https://images.unsplash.com/photo-1617396482401-0fdd3d95c5d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';

  state$: Observable<ProductStoreState>;
  products: ProductList[];


  navigation: SwiperNavigationInterface;
  brandSwiper: SwiperConfigInterface;
  productSwiper: SwiperConfigInterface;
  buttonSwiper: SwiperConfigInterface;
  renderSwiper: boolean;

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
  constructor(public productFacadeService: ProductFacadeService, private route: Router, private ngxImgZoom: NgxImgZoomService) {
    this.ngxImgZoom.setZoomBreakPoints([
      { w: 100, h: 100 },
      { w: 150, h: 150 },
      { w: 200, h: 200 },
      { w: 250, h: 250 },
      { w: 300, h: 300 }]);

    this.productFacadeService.initialize();
  }

  ngAfterViewInit(): void {


    this.navigation = {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    };


    this.brandSwiper = {
      direction: 'vertical',
      navigation: this.navigation,
      pagination: false,
      autoplay: false,
      autoHeight:  true,
      slidesPerView: 4,
      spaceBetween: 8,
    };

    this.productSwiper = {
      direction: 'horizontal',
      navigation: this.navigation,
      pagination: false,
      autoplay: false,
      autoHeight:  true,
      slidesPerView: 5,
      spaceBetween: 8,
    };

    this.buttonSwiper = {
      direction: 'horizontal',
      navigation: this.navigation,
      pagination: false,
      autoplay: false,
      autoHeight:  true,
      slidesPerView: 6,
      spaceBetween: 16,
    };

    setTimeout(() => {
      this.renderSwiper = true;
    }, 400);
  }

  ngOnInit(): void {
    this.productDetails = this.productFacadeService.getProductDetailedState();
    this.getProductsList();
    this.state$ = this.productFacadeService.stateChange();
  }

  getProductsList(): void {
    this.productFacadeService.getProducts().subscribe(response => {
      this.products = response;
      this.productFacadeService.updateProductLists(response);
    })
  }

  goToDetails(product: ProductList): void {
    this.productFacadeService.updateProductDetails(product);
    this.route.navigate(['/product/details']).then();
  }

}
