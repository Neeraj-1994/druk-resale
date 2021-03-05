import { Injectable } from '@angular/core';
import { ProductList } from '../models/product-list.model';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ObservableStore } from '@codewithdan/observable-store';

export interface ProductStoreState {
  productListState: ProductList[];
  productDetailedState: ProductList;
}

@Injectable({
  providedIn: 'root'
})
export class ProductStateService extends ObservableStore<ProductStoreState> {

  private productListings: ProductList[];
  private productDetails: ProductList;
  constructor() {
    super({trackStateHistory: true, logStateChanges: true});
    this.initialState();
  }

  // Initialize and update states

  initialState(): void {
    const initialState = {
      productListState: [undefined],
      productDetailedState: undefined
    };
    this.productListings = [undefined];
    this.productDetails = undefined;
    this.setState(initialState, 'INIT_STATE');
  }

  updateAllProductState(): void {
    let stateData = this.getState();

    stateData = {
      productListState: { ...stateData.productListState } as ProductList[],
      productDetailedState: { ...stateData.productDetailedState} as ProductList
    };
    this.setState({ ...stateData }, 'UPDATE_ALL_STATE');
  }

  // Detect state changes

  productListStateChange(): Observable<ProductList[]> {
    return this.stateWithPropertyChanges.pipe(
      filter(stateChange => !!stateChange.stateChanges.productListState),
      map(stateChange => stateChange.stateChanges.productListState)
    );
  }

  // Update partial states

  updateProductList(eventData: Partial<ProductList[]>): void {
    const productListState = this.productListState ? { ...this.productListState, ...eventData } : { ...eventData } as ProductList[];
    this.setState({ productListState }, 'UPDATE_PRODUCT_LIST');
  }

  updateProductDetail(eventData: Partial<ProductList>): void {
    const productDetailedState = this.productDetailedState ?
      { ...this.productDetailedState, ...eventData } : { ...eventData } as ProductList;
    this.setState({ productDetailedState }, 'UPDATE_PRODUCT_DETAIL');
  }

  // Update States

  updateProductLists(productListState: ProductList[]): void {
    this.setState({productListState}, 'UPDATE_PRODUCT_LISTS');
  }

  updateProductDetails(productDetailedState: ProductList): void {
    this.setState({productDetailedState}, 'UPDATE_PRODUCT_DETAILS');
  }

  // Remove States

  removeProductListsState(): void {
    this.setState({productListState: null});
  }

  removeProductDetailsState(): void {
    this.setState({productDetailedState: null});
  }

  // Payload for states

  payLoadProductListsState(): ProductList[] {
    return { ...this.productListState };
  }

  payLoadProductDetailedState(): ProductList {
    return { ...this.productDetailedState};
  }

  // Get States

  get productListState(): ProductList[] {
    return { ...this.getState().productListState };
  }

  get productDetailedState(): ProductList {
    return { ...this.getState().productDetailedState };
  }
}
