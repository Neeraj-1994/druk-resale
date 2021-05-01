import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductList, SliderImage } from '../../models/product-list.model';
import { Observable } from 'rxjs';
import { HomeStoreState } from '../../services/home-state.service';
import { Router } from '@angular/router';
import { HomeFacadeService } from '../../services/home-facade.service';
import { ProductFacadeService, ProductStoreState } from '@druk-resale/feature/product-order';
import { SwiperConfigInterface, SwiperNavigationInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'home-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  state$: Observable<HomeStoreState>;
  productState$: Observable<ProductStoreState>;
  products: ProductList[];
  constructor(public homeFacadeService: HomeFacadeService, private route: Router, public productFacadeService: ProductFacadeService) {
    this.homeFacadeService.initialize();
  }

  ngOnInit(): void {
    this.state$ = this.homeFacadeService.stateChange();
    this.productState$ = this.productFacadeService.stateChange();
    this.getProductsList();
  }

  ngAfterViewInit(): void {
  }

  getProductsList(): void {
    this.homeFacadeService.getProducts().subscribe(response => {
      this.products = response;
      this.homeFacadeService.updateProductLists(response);
    })
  }

  goToDetails(product: ProductList): void {
    this.homeFacadeService.updateProductDetails(product);
    this.productFacadeService.updateProductDetails(product);
    this.route.navigate(['/product/details']).then();
  }
}
