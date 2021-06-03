import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderNavSectionComponent } from './components/header-nav-section/header-nav-section.component';
import { HeaderTabSectionComponent } from './components/header-tab-section/header-tab-section.component';
import { HeaderBannerSectionComponent } from './components/header-banner-section/header-banner-section.component';

import { AdSectionComponent } from './components/ad-section/ad-section.component';
import { DownloadSectionComponent } from './components/download-section/download-section.component';
import { FeatureSectionComponent } from './components/feature-section/feature-section.component';
import { FilterSectionComponent } from './components/filter-section/filter-section.component';
import { FooterSocialSectionComponent } from './components/footer-social-section/footer-social-section.component';
import { FooterLinksSectionComponent } from './components/footer-links-section/footer-links-section.component';
import { PopularTabSectionComponent } from './components/popular-tab-section/popular-tab-section.component';
import { ProductListCardComponent } from './components/product-list-card/product-list-card.component';
import { SortSectionComponent } from './components/sort-section/sort-section.component';
import { UserSectionComponent } from './components/user-section/user-section.component';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';
import { HomeProductCardComponent } from './components/home-product-card/home-product-card.component';
import { PaginationSectionComponent } from './components/pagination-section/pagination-section.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatSliderModule,
    MatExpansionModule,
    MatRippleModule,
    SwiperModule,
    MatChipsModule,
    MatCheckboxModule,
    FormsModule
  ],
  declarations: [
    HeaderNavSectionComponent,
    HeaderTabSectionComponent,
    HeaderBannerSectionComponent,
    AdSectionComponent,
    DownloadSectionComponent,
    FeatureSectionComponent,
    FilterSectionComponent,
    FooterSocialSectionComponent,
    FooterLinksSectionComponent,
    PopularTabSectionComponent,
    ProductListCardComponent,
    SortSectionComponent,
    UserSectionComponent,
    HomeProductCardComponent,
    PaginationSectionComponent,
    SearchBarComponent
  ],
  exports: [
    HeaderTabSectionComponent,
    HeaderNavSectionComponent,
    HeaderBannerSectionComponent,
    FooterLinksSectionComponent,
    FooterSocialSectionComponent,
    ProductListCardComponent,
    PopularTabSectionComponent,
    SortSectionComponent,
    UserSectionComponent,
    FeatureSectionComponent,
    DownloadSectionComponent,
    AdSectionComponent,
    FilterSectionComponent
  ]
})
export class SharedComponentsModule {}
