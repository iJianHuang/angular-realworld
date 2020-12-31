import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private setHeaders(): HttpHeaders {
    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return new HttpHeaders(headersConfig);
  }

 

  post(path: string, body: Object = {}): Observable<any> { 
    const headers = this.setHeaders();
    return this.http.post(
        `${environment.api_url_conduit}${path}`, 
        JSON.stringify(body), 
        { headers }
      )
      .pipe(
        tap(data => console.log('Result: ' + JSON.stringify(data))),
        catchError(this.handleError) 
      );
      // .catch(this.formatErrors)
      // .map((res:Response) => res.json());
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

  // getProducts(): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(this.productUrl)
}
