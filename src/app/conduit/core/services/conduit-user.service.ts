import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { Observable, of, BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap, map, distinctUntilChanged } from 'rxjs/operators';

import { ApiService } from '../../../core/services/api.service';
import { JwtService } from '../../../core/services/jwt.service'

import { ConduitUser } from '../models/conduit-user.model';

@Injectable({
  providedIn: 'root'
})
export class ConduitUserService {
  private currentUserSubject = new BehaviorSubject<ConduitUser>(new ConduitUser());
  public currentUser$ = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService
  ) { }

  populate() {
    if (this.jwtService.getConduitToken()) {
      this.apiService.getConduit('/user')
      .subscribe(
        data => this.setAuth(data.user),
        err => this.purgeAuth()
      );
    } else {
      this.purgeAuth();
    }
  }

  setAuth(user: ConduitUser) {
    this.jwtService.saveConduitToken(user.token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  attemptAuth(type, credentials): Observable<ConduitUser> {
    let route = (type === 'login') ? '/login' : '';
    return this.apiService
      .postConduit('/users' + route, {user: credentials})
      .pipe(
        tap(data => console.log('Result: ' + JSON.stringify(data))),
        tap(data => this.setAuth(data.user)),
        catchError(this.handleError) 
      );    
  }

  purgeAuth() {
    this.jwtService.destroyConduitToken();
    this.currentUserSubject.next({} as ConduitUser);
    this.isAuthenticatedSubject.next(false);
  }

  getCurrentUser(): ConduitUser {
    return this.currentUserSubject.value;
  }

  private handleError(err): Observable<never> {
    // // in a real world app, we may send the server to some remote logging infrastructure
    // // instead of just logging it to the console
    // let errorMessage: string;
    // if (err.error instanceof ErrorEvent) {
    //   // A client-side or network error occurred. Handle it accordingly.
    //   errorMessage = `An error occurred: ${err.error.message}`;
    // } else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong,
    //   errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    // }
    console.error(err);
    //return throwError(errorMessage);
    return throwError(err);
  }
}
 