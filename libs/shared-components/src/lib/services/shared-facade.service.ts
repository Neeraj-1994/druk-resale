import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductList } from '../models/product-list.model';
import { SharedApiService } from './shared-api.service';
import { DrukReSaleStoreState, SharedStateService } from './shared-state.service';

@Injectable({
  providedIn: 'root'
})
export class SharedFacadeService {

  constructor(
    private sharedApiService: SharedApiService,
    private sharedStateService: SharedStateService
  ) { }

  // State services
  // Initialize and update states

  initialize(): void {
    this.sharedStateService.initialState();
  }

  stateChange(): Observable<DrukReSaleStoreState> {
    return this.sharedStateService.stateChanged;
  }

  updateAllProductState(): void {
    this.sharedStateService.updateAllProductState();
  }

  // Update partial states

  updateProductList(eventData: Partial<ProductList[]>): void {
    this.sharedStateService.updateProductList(eventData);
  }

  updateProductDetail(eventData: Partial<ProductList>): void {
    this.sharedStateService.updateProductDetail(eventData);
  }

  // Update States

  updateProductLists(productListState: ProductList[]): void {
    this.sharedStateService.updateProductLists(productListState);
  }

  updateProductDetails(productDetailedState: ProductList): void {
    this.sharedStateService.updateProductDetails(productDetailedState);
  }

  // Detect state changes

  productListStateChange(): Observable<ProductList[]> {
    return this.sharedStateService.productListStateChange();
  }

  // Remove States

  removeProductListsState(): void {
    this.sharedStateService.removeProductListsState()
  }

  removeProductDetailsState(): void {
    this.sharedStateService.removeProductDetailsState();
  }

  // Payload for states

  getProductListsState(): ProductList[] {
    return this.sharedStateService.payLoadProductListsState();
  }

  getProductDetailedState(): ProductList {
    return this.sharedStateService.payLoadProductDetailedState();
  }

  // API services
  getProducts(): Observable<ProductList[]> {
    return this.sharedApiService.getProducts();
  }
}
