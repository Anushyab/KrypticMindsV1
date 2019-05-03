
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, } from '@angular/http';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
    public  ServerUrl = '';
  constructor(private http: HttpClient) {
  }
  private getHeaders() {
    // I included these headers because otherwise FireFox
    // will request text/html

    let headers = new HttpHeaders();
    headers = headers
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded');
    // return headers;
    // let headers = new Headers();
    // headers.append('Accept', 'application/json');
    // headers.append('Content-Type', 'application/json');
    // headers.append('Authorization','Bearer '+localStorage.getItem('token'));
    return headers;
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }
  localfileinfo(url) {
    //  const url = '/assets/countrylist.json';
      return this.http.get(url, {
        headers: this.getHeaders()
      }).pipe(map((data: Response) => {
        return data;

      }), catchError(this.handleError), );
    }
}
