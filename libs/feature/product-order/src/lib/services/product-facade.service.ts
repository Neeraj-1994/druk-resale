import { Injectable } from '@angular/core';
import { ProductStateService } from './product-state.service';
import { ProductApiService } from './product-api.service';
import { ProductBlService } from './product-bl.service';
import { Observable } from 'rxjs';
import { HomeStoreState } from '../../../../home/src/lib/services/home-state.service';
import { ProductList } from '../../../../home/src/lib/models/product-list.model';

@Injectable({
  providedIn: 'root'
})
export class ProductFacadeService {

  constructor(
    private productStateService: ProductStateService,
    private productApiService: ProductApiService,
    private productBlService: ProductBlService
    ) { }

  // State services
  // Initialize and update states

  initialize(): void {
    this.productStateService.initialState();
  }

  stateChange(): Observable<HomeStoreState> {
    return this.productStateService.stateChanged;
  }

  updateAllProductState(): void {
    this.productStateService.updateAllProductState();
  }

  // Update partial states

  updateProductList(eventData: Partial<ProductList[]>): void {
    this.productStateService.updateProductList(eventData);
  }

  updateProductDetail(eventData: Partial<ProductList>): void {
    this.productStateService.updateProductDetail(eventData);
  }

  // Update States

  updateProductLists(productListState: ProductList[]): void {
    this.productStateService.updateProductLists(productListState);
  }

  updateProductDetails(productDetailedState: ProductList): void {
    this.productStateService.updateProductDetails(productDetailedState);
  }

  // Detect state changes

  productListStateChange(): Observable<ProductList[]> {
    return this.productStateService.productListStateChange();
  }

  // Remove States

  removeProductListsState(): void {
    this.productStateService.removeProductListsState()
  }

  removeProductDetailsState(): void {
    this.productStateService.removeProductDetailsState();
  }

  // Payload for states

  getProductListsState(): ProductList[] {
    return this.productStateService.payLoadProductListsState();
  }

  getProductDetailedState(): ProductList {
    return this.productStateService.payLoadProductDetailedState();
  }

  // API services
  getProducts(): Observable<ProductList[]> {
    return this.productApiService.getProducts();
  }
}
