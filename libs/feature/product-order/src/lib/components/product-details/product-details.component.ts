import { Component, Input, OnInit } from '@angular/core';
import { DrukReSaleStoreState, ProductList, SharedFacadeService } from '@druk-resale/shared-components';
import { Observable } from 'rxjs';

@Component({
  selector: 'po-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  state$: Observable<DrukReSaleStoreState>;
  productDetails: ProductList;
  constructor(public sharedFacadeService: SharedFacadeService) {
    this.sharedFacadeService.initialize();
  }

  ngOnInit(): void {
    this.state$ = this.sharedFacadeService.stateChange();
    this.productDetails = this.sharedFacadeService.getProductDetailedState();
  }

}
