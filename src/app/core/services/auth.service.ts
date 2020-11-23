import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenModel} from '../models/token.model';
import {UserModel} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly url = '/api/auth';

  constructor(private httpClient: HttpClient) { }

  login(user: UserModel): Observable<TokenModel> {
    return this.httpClient.post<TokenModel>(`${this.url}/login`, user);
  }
}
