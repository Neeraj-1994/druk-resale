import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductList } from '../../models/product-list.model';
import { Router } from '@angular/router';
import { ProductFacadeService } from '../../services/product-facade.service';
import { ProductStoreState } from '../../services/product-state.service';

@Component({
  selector: 'po-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  state$: Observable<ProductStoreState>;
  products: ProductList[];
  constructor(public productFacadeService: ProductFacadeService, private route: Router) {
    this.productFacadeService.initialize();
  }
  /*sort = [
    {option: 'Most Relivant'},
    {option: 'Most Relivant'},
    {option: 'Most Relivant'}
  ];*/

  ngOnInit(): void {
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
