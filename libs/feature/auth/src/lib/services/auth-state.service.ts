import { Injectable } from '@angular/core';
import { User } from '../models/auth.model';
import { ObservableStore } from '@codewithdan/observable-store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface AuthStoreState {
  userState: User
}

@Injectable({
  providedIn: 'root'
})
export class AuthStateService extends ObservableStore<AuthStoreState>{

  private user = User;

  constructor() {
    super({trackStateHistory: true, logStateChanges: true});
    this.initialState();
  }

  // Initialize and update states

  initialState(): void {
    const initialState = {
      userState: undefined
    };
    this.user = undefined;
    this.setState(initialState, 'INIT_STATE');
  }

  updateAllUserState(): void {
    let stateData = this.getState();

    stateData = {
      userState: { ...stateData.userState } as User
    };
    this.setState({ ...stateData }, 'UPDATE_ALL_STATE');
  }

  // Detect state changes

  userStateChange(): Observable<User> {
    return this.stateWithPropertyChanges.pipe(
      filter(stateChange => !!stateChange.stateChanges.userState),
      map(stateChange => stateChange.stateChanges.userState)
    );
  }

  // Update partial states

  updateUser(eventData: Partial<User>): void {
    const userState = this.userState ? { ...this.userState, ...eventData } : { ...eventData } as User;
    this.setState({ userState }, 'UPDATE_USER');
  }

  // Update States

  updateUsers(userState: User): void {
    this.setState({userState}, 'UPDATE_USERS');
  }

  // Remove States

  removeUserState(): void {
    this.setState({userState: null});
  }

  // Payload for states

  payLoadUserState(): User {
    return { ...this.userState };
  }

  // Get States

  get userState(): User {
    return { ...this.getState().userState };
  }
}
