import { Injectable } from '@angular/core';
import { AuthStateService, AuthStoreState } from './auth-state.service';
import { AuthApiService } from './auth-api.service';
import { AuthBlService } from './auth-bl.service';
import { Observable } from 'rxjs';
import { User, UserData, UserLogin } from '../models/auth.model';
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  constructor(
    private userStateService: AuthStateService,
    private userApiService: AuthApiService,
    private userBlService: AuthBlService) { }

  // State services
  // Initialize and update states

  initialize(): void {
    this.userStateService.initialState();
  }

  stateChange(): Observable<AuthStoreState> {
    return this.userStateService.stateChanged;
  }

  updateAllUserState(): void {
    this.userStateService.updateAllUserState();
  }

  // Update partial states

  updateUser(eventData: Partial<User>): void {
    this.userStateService.updateUser(eventData);
  }

  // Update States

  updateUsers(userState: User): void {
    this.userStateService.updateUsers(userState);
  }

  // Detect state changes

  userStateChange(): Observable<User> {
    return this.userStateService.userStateChange();
  }

  // Remove States

  removeUserState(): void {
    this.userStateService.removeUserState();
  }

  // Payload for states

  getUserState(): User {
    return this.userStateService.payLoadUserState();
  }

  // API services
  googleSignIn(): void {
    this.userApiService.signInViaGoogle();
  }

  facebookSignIn(): void {
    this.userApiService.signInViaFacebook();
  }

  emailSignIn(userCred: UserLogin): void {
    this.userApiService.signInWithEmailAndPassword(userCred);
    this.updateUser(this.userData);
  }

  emailRegister(user: User): void {
    this.userApiService.registerUser(user);
    this.updateUsers(user);
    this.updateUser(this.userData);
  }

  get userData(): UserData {
    return this.userApiService.getUserData();
  }

  // Business Logic services
}
