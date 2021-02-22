import { Component, OnInit } from '@angular/core';
import { ProductList } from '../../models/product-list.model';
import { Observable } from 'rxjs';
import { HomeStoreState } from '../../services/home-state.service';
import { Router } from '@angular/router';
import { HomeFacadeService } from '../../services/home-facade.service';

@Component({
  selector: 'home-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  state$: Observable<HomeStoreState>;
  products: ProductList[];
  constructor(private homeFacadeService: HomeFacadeService, private route: Router) {
    this.homeFacadeService.initialize();
  }

  ngOnInit(): void {
    this.getProductsList();
    this.state$ = this.homeFacadeService.stateChange();
  }

  getProductsList(): void {
    this.homeFacadeService.getProducts().subscribe(response => {
      this.products = response;
      this.homeFacadeService.updateProductLists(response);
    })
  }

  goToDetails(product: ProductList): void {
    this.homeFacadeService.updateProductDetails(product);
    this.route.navigate(['/product/details']).then();
  }
}
