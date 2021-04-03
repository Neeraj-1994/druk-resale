import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { ProductPost } from '../models/product-post.model';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface PostStoreState {
  productPostState: ProductPost;
  editBasicDetails?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PostStateService extends ObservableStore<PostStoreState>{

  private productPost: ProductPost;
  constructor() {
    super({trackStateHistory: true});
    this.initialState();
  }

  initialState(): void {
    const initialState = {
      productPostState: undefined,
      editBasicDetails: false
    };
    this.productPost = undefined;
    this.setState(initialState, 'INIT_STATE');
  }

  updateAllProductState(): void {
    let stateData = this.getState();

    stateData = {
      productPostState: { ...stateData.productPostState} as ProductPost
    }
    this.setState({ ...stateData }, 'UPDATE_ALL_STATE');
  }

  // Detect State Changes

  productPostStateChanges(): Observable<ProductPost> {
    return this.stateWithPropertyChanges.pipe(
      filter(stateChange => !!stateChange.stateChanges.productPostState),
      map(stateChange => stateChange.stateChanges.productPostState)
    )
  }

  // Update partial states

  updatePartialProductPost(eventData: Partial<ProductPost>): void {
    const productPostState = this.productPostState ? { ...this.productPostState, ...eventData } : { ...eventData } as ProductPost;
    this.setState({ productPostState }, 'UPDATE_PARTIAL_PRODUCT_POST');
  }

  // Update States

  updateProductPost(productPostState: ProductPost): void {
    this.setState({productPostState}, 'UPDATE_PRODUCT_POST');
  }

  updateBasicDetails = (editBasicDetails: boolean) => {
    this.setState({editBasicDetails}, 'UPDATE_EDIT_BASIC_DETAILS');
  }

  // Remove States

  removeProductPostState(): void {
    this.setState({productPostState: null});
  }

  // Payload for states

  payLoadProductPostState(): ProductPost {
    return { ...this.productPostState };
  }

  // Get States

  get productPostState(): ProductPost {
    return { ...this.getState().productPostState };
  }
}
