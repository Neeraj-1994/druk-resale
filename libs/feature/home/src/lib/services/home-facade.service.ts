import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductList } from '../models/product-list.model';
import { HomeStateService, HomeStoreState } from './home-state.service';
import { HomeApiService } from './home-api.service';
import { HomeBlService } from './home-bl.service';

@Injectable({
  providedIn: 'root'
})
export class HomeFacadeService {

  constructor(
    private homeStateService: HomeStateService,
    private homeApiService: HomeApiService,
    private homeBlService: HomeBlService
    ) { }


  // State services
  // Initialize and update states

  initialize(): void {
    this.homeStateService.initialState();
  }

  stateChange(): Observable<HomeStoreState> {
    return this.homeStateService.stateChanged;
  }

  updateAllProductState(): void {
    this.homeStateService.updateAllProductState();
  }

  // Update partial states

  updateProductList(eventData: Partial<ProductList[]>): void {
    this.homeStateService.updateProductList(eventData);
  }

  updateProductDetail(eventData: Partial<ProductList>): void {
    this.homeStateService.updateProductDetail(eventData);
  }

  // Update States

  updateProductLists(productListState: ProductList[]): void {
    this.homeStateService.updateProductLists(productListState);
  }

  updateProductDetails(productDetailedState: ProductList): void {
    this.homeStateService.updateProductDetails(productDetailedState);
  }

  // Detect state changes

  productListStateChange(): Observable<ProductList[]> {
    return this.homeStateService.productListStateChange();
  }

  // Remove States

  removeProductListsState(): void {
    this.homeStateService.removeProductListsState()
  }

  removeProductDetailsState(): void {
    this.homeStateService.removeProductDetailsState();
  }

  // Payload for states

  getProductListsState(): ProductList[] {
    return this.homeStateService.payLoadProductListsState();
  }

  getProductDetailedState(): ProductList {
    return this.homeStateService.payLoadProductDetailedState();
  }

  // API services
  getProducts(): Observable<ProductList[]> {
    return this.homeApiService.getProducts();
  }
}
