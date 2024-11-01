import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly _httpClient: HttpClient) { }


  getLogin(): Observable<any> {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

}
