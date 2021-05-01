import { Injectable } from '@angular/core';
import { ProductPost } from '../models/product-post.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  productsCollection: AngularFirestoreCollection<ProductPost>;
  products: Observable<ProductPost[]>;

  constructor(public afs: AngularFirestore, public router: Router) {
    this.productsCollection = afs.collection<ProductPost>('products-list');
    this.products = this.productsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ProductPost;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  postProduct(product: ProductPost) {
    this.productsCollection.add(product).then();
  }
}
