import { Injectable } from '@angular/core';
import { ProductList } from '../models/product-list.model';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {

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
