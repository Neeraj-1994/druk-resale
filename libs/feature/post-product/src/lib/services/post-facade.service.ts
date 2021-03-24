import { Injectable } from '@angular/core';
import { PostApiService } from './post-api.service';
import { ProductPost } from '../models/product-post.model';

@Injectable({
  providedIn: 'root'
})
export class PostFacadeService {

  constructor(private postApiService: PostApiService) { }

  // Api service
  postProduct(product: ProductPost) {
    this.postApiService.postProduct(product);
  }

}
