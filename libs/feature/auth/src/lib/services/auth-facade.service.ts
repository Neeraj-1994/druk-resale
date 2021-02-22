import { Injectable } from '@angular/core';
import { AuthStateService, AuthStoreState } from './auth-state.service';
import { AuthApiService } from './auth-api.service';
import { AuthBlService } from './auth-bl.service';
import { Observable } from 'rxjs';
import { User } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  constructor(
    private userStateService: AuthStateService,
    private userApiService: AuthApiService,
    private userBLService: AuthBlService) { }

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
  // Business Logic services
}
