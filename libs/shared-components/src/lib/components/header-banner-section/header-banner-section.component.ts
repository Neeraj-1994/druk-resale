import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SwiperConfigInterface, SwiperNavigationInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { Router } from '@angular/router';

@Component({
  selector: 'dr-header-banner-section',
  templateUrl: './header-banner-section.component.html',
  styleUrls: ['./header-banner-section.component.scss']
})
export class HeaderBannerSectionComponent implements OnInit, AfterViewInit {

  pagination: SwiperPaginationInterface;
  navigation: SwiperNavigationInterface;
  brandSwiper: SwiperConfigInterface;
  renderSwiper: boolean;
  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
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
