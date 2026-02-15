import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtTokenStorage } from './jwt-token-storage';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl: string = `${environment.apiUrl}/auth`;

  constructor(
    private httpClient: HttpClient,
    private jwtTokenStorage: JwtTokenStorage,
    private router: Router
  ) {}

  login(username: string, password: string) {
    const loginPayload = {
      username,
      password,
    };

    return this.httpClient.post<{ token: string }>(
      `${this.baseUrl}/login`,
      loginPayload
    );
  }
}
