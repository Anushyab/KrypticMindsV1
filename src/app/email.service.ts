import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Model } from './home/contact-us/contact-us.component';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }
  emailSubmit(payload: Model)
  {
    return this.http.post('https://script.google.com/macros/s/AKfycbyRf-8BeQB2ptBavuKlF-mcZ4uj6D89QaJ7Gnd57yp_FSDAVNI/exec',{
      name: payload.name,
      email: payload.email,
      companyName: payload.companyName,
      comment: payload.comment,
    },
    {
      headers: new HttpHeaders()
      .set('content-type', 'application/x-www-form-urlencoded')
    });
  }
}
