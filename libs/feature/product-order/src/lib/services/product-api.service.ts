import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ProductList } from '../../../../home/src/lib/models/product-list.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  productsCollection: AngularFirestoreCollection<ProductList>;
  products: Observable<ProductList[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.productsCollection = afs.collection<ProductList>('products-list');
    this.products = this.productsCollection.snapshotChanges().pipe(
      map(actions => actions.map(action => {
        const data = action.payload.doc.data() as ProductList;
        const id = action.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getProducts(): Observable<ProductList[]> {
    return this.products;
  }
}
