import { Component, OnInit } from '@angular/core';
import { SharedFacadeService } from '@druk-resale/shared-components';
import { ProductList } from '@druk-resale/shared-components';
import { Observable } from 'rxjs';
import { DrukReSaleStoreState } from '@druk-resale/shared-components';
import { Router } from '@angular/router';

@Component({
  selector: 'home-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  state$: Observable<DrukReSaleStoreState>;
  products: ProductList[];
  constructor(private sharedFacadeService: SharedFacadeService, private route: Router) {
    this.sharedFacadeService.initialize();
  }

  ngOnInit(): void {
    this.getProductsList();
    this.state$ = this.sharedFacadeService.stateChange();
  }

  getProductsList(): void {
    this.sharedFacadeService.getProducts().subscribe(response => {
      this.products = response;
      this.sharedFacadeService.updateProductLists(response);
    })
  }

  goToDetails(product: ProductList): void {
    this.sharedFacadeService.updateProductDetails(product);
    this.route.navigate(['/product/details']).then();
  }
}
