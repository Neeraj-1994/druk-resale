import { Injectable } from '@angular/core';
import { User, UserData, UserLogin } from '../models/auth.model';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  userData = new UserData();
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private fireAuth: AngularFireAuth,
    private route: Router,
    private _snackBar: MatSnackBar
  ) { }

  signInViaGoogle(): void {
    this.fireAuth.signInWithRedirect(new GoogleAuthProvider())
      .then();
  }

  signInViaFacebook(): void {
    this.fireAuth.signInWithRedirect(new FacebookAuthProvider())
      .then();
  }

  signInWithEmailAndPassword(userCred: UserLogin): void {
    this.fireAuth.signInWithEmailAndPassword(userCred.email, userCred.password).then(
      (response) => {
        this.userData.photoUrl = response.user.photoURL;
        this.userData.displayName = response.user.displayName;
        this.userData.email = response.user.email;
        this.userData.uid = response.user.uid;
        this._snackBar.open('Successfully Logged In', 'End now', {
          duration: 5000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.route.navigate(['/home'])
      },
      error => {
        this._snackBar.open(`${error.message}`, 'End now', {
          duration: 5000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    );
  }

  registerUser(user: User): void {
    this.fireAuth.createUserWithEmailAndPassword(user.email, user.password).then((response) => {
        this.userData.photoUrl = response.user.photoURL;
        this.userData.email = response.user.email;
        this.userData.uid = response.user.uid;
        response.user.updateProfile({displayName: (user.first_name + ' ' + user.last_name)}).then();
        this.userData.displayName = response.user.displayName;
      this._snackBar.open('Sign In to Continue', 'End now', {
        duration: 5000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      this.route.navigate(['/user/login'])},
        error => {
          this._snackBar.open(`${error.message}`, 'End now', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
        }
    );
  }

  getUserData(): UserData {
    return this.userData;
  }
}
