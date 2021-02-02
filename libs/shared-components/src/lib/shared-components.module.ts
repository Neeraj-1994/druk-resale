import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdSectionComponent } from './components/ad-section/ad-section.component';
import { DownloadSectionComponent } from './components/download-section/download-section.component';
import { FeatureSectionComponent } from './components/feature-section/feature-section.component';
import { FilterSectionComponent } from './components/filter-section/filter-section.component';
import { FooterSocialSectionComponent } from './components/footer-social-section/footer-social-section.component';
import { FooterLinksSectionComponent } from './components/footer-links-section/footer-links-section.component';
import { HeaderNavSectionComponent } from './components/header-nav-section/header-nav-section.component';
import { HeaderTabSectionComponent } from './components/header-tab-section/header-tab-section.component';
import { PopularTabSectionComponent } from './components/popular-tab-section/popular-tab-section.component';
import { ProductListCardComponent } from './components/product-list-card/product-list-card.component';
import { SortSectionComponent } from './components/sort-section/sort-section.component';
import { UserSectionComponent } from './components/user-section/user-section.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdSectionComponent,
    DownloadSectionComponent,
    FeatureSectionComponent,
    FilterSectionComponent,
    FooterSocialSectionComponent,
    FooterLinksSectionComponent,
    HeaderNavSectionComponent,
    HeaderTabSectionComponent,
    PopularTabSectionComponent,
    ProductListCardComponent,
    SortSectionComponent,
    UserSectionComponent
  ],
})
export class SharedComponentsModule {}
