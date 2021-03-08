import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { ProductPost } from '../models/product-post.model';

export interface PostStoreState {
  productPostState: ProductPost;
}

@Injectable({
  providedIn: 'root'
})
export class PostStateService extends ObservableStore<PostStoreState>{

  private productPost: ProductPost;
  constructor() {
    super({trackStateHistory: true});
  }


}
