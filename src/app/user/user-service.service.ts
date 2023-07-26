import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {

 private user$$ = new BehaviorSubject<User | undefined>(undefined);
 public user$ = this.user$$.asObservable();
 
  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }
  
  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
     this.user = user;
   });
  }

  login(email: string, password: string) {
    const {appUrl} = environment
    return this.http
    .post<User>(`${appUrl}/users.json`, { email, password })
    .pipe(tap((user) => this.user$$.next(user)))
  }

  register(firstName: string, lastName: string, email: string, password: string, ) {
    const { appUrl } = environment;
    return this.http
    .post<User>(`${appUrl}/users.json`, { firstName, lastName, email, password})
    .pipe(tap((user) => this.user$$.next(user)))
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
