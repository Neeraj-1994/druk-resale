import { Injectable } from '@angular/core';
import { ProductList } from '../models/product-list.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from '@druk-resale/shared-components';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedApiService {

  productsCollection: AngularFirestoreCollection<ProductList>;
  products: Observable<ProductList[]>;

  constructor(
    private afs: AngularFirestore,
    private fireAuth: AngularFireAuth,
    private route: Router
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

  // Auth Service

  signInViaGoogle(): void {
    this.fireAuth.signInWithRedirect(new GoogleAuthProvider())
      .then();
  }

  signInViaFacebook(): void {
    this.fireAuth.signInWithRedirect(new FacebookAuthProvider())
      .then();
  }

  signInWithEmailAndPassword(user: User): void {
    this.fireAuth.signInWithEmailAndPassword(user.email, user.password).then(
      () => {
        this.route.navigate(['/home']);
      });
  }

  registerUser(user: User): void {
    this.fireAuth.createUserWithEmailAndPassword(user.email, user.password).then(() => {
      this.route.navigate(['/user/login'])});
  }

  getProducts(): Observable<ProductList[]> {
    return this.products;
  }
}
