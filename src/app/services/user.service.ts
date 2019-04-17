import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../../models/user";
import {LoginRequest} from "../../models/login";
import {tap} from "rxjs/operators";

const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly user$ = new BehaviorSubject<User>(undefined);
  constructor() {
    const user = JSON.parse(localStorage.getItem(USER_KEY));
    this.user$.next(user);
  }

  isLogged() {
    return !!this.user$.value;
  }

  login(request: LoginRequest) {
    return new Observable<User>((observer) => {
      setTimeout(() => {
        const user: User = {
          email: request.email,
          company: request.company,
          roles: ['Read'],
          id: '1634',
          username: 'apaolett',
        };
        observer.next(user);
        observer.complete();
      }, 1000)
    }).pipe(
      tap((user) => {
        localStorage.setItem(USER_KEY, JSON.stringify(user))
        this.user$.next(user);
      })
    );
  }

  logout(){
    this.user$.next(undefined);
    localStorage.removeItem(USER_KEY);
  }
}
