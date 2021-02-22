import { Injectable } from '@angular/core';
import { User } from '../models/auth.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(
    private fireAuth: AngularFireAuth,
    private route: Router) { }

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
}
