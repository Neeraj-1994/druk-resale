import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwiperConfigInterface, SwiperNavigationInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'druk-resale-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit{

  pagination: SwiperPaginationInterface;
  navigation: SwiperNavigationInterface;
  brandSwiper: SwiperConfigInterface;
  renderSwiper: boolean;
  title = 'druk-resale';
  authRoutes = ['/user/login', '/user/register', '/user/forgot-password'];

  constructor(public route: Router) {
  }

  ngAfterViewInit() {
    this.pagination = {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      bulletActiveClass: 'swiper-pagination-bullet-active mat-primary-background'
    };


    this.navigation = {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    };


    this.brandSwiper = {
      direction: 'horizontal',
      navigation: this.navigation,
      pagination: this.pagination,
      autoplay: false,
    };

    setTimeout(() => {
      this.renderSwiper = true;
    }, 400);
  }
}
