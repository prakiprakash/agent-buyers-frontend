import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BuyerContactsService {
  constructor(private http: HttpClient) {}

  getContacts(): Observable<any> {
    const url = `https://api.moxiworks.com/api/contacts/`;
    const token =
      'eyJraWQiOiI2WnY1NGk0LXM1ak82VHJSYW9YbXlKdlV3cjhIM0dfa2dhakNSRmpzaVlVIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULktuQ2I0UjMway12N3ZxRmdDTzBJTlF2YnVxWmw0cnpjUU1Ob3UzdGh2TTAiLCJpc3MiOiJodHRwczovL3JlYWxvZ3kub2t0YS5jb20vb2F1dGgyL2F1c2JqMnV5cjZHdVBnQ3pyMXQ3IiwiYXVkIjoiaHR0cHM6Ly9hcGkubGlzdGluZy1jb25jaWVyZ2UuY29tIiwiaWF0IjoxNjMzNzA3Njk3LCJleHAiOjE2MzM3MjIwOTcsImNpZCI6IjBvYWVieG80NDVKaFR1cHRxMXQ3Iiwic2NwIjpbImxjYXBpYXV0aCJdLCJzdWIiOiIwb2FlYnhvNDQ1SmhUdXB0cTF0NyJ9.JVESIKTCZ0yDYVjYX2f535qRT1nbmUgwkF22o4EcBKvfEneBIIlh3EgjLjSHB7l0fyO1YxkNwfmWukp98kcslB2E9WkoBi16pPleLBZD9mGlHX2u_RH7UmA3cu0Qsrae8gm-DTXdMvDek4a20XYWLgKYLvm4scxKuBxqIBTxyBZi_ZrTFXaUGSiMyZHkRRdxRX_UZ63ce-7PCtYYhqoks23trIO8YgJMYJgh0DpaxhGJsPwRTQS3Qc-Hxp9PXrTzxnn1lEHAnLGJ-w_WhwqUzaCCRQgQFWAMFxNI3QlINkJgg32X_4HsrGsWoRPfl27p4OZeHq4R-vDQzsT6C8lIhQ';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const queryParams = new HttpParams()
      .set(
        'source_agent_id',
        '00us7d6rvInjd9PwV1t6_P00500000FDdqQEMiwvZiilpsc6Ag72K1rUdYxck'
      )
      .set('parent_company_id', 'realogy');
    return this.http.get(url, {
      params: queryParams,
      observe: 'response',
      headers,
    });
  }
}
