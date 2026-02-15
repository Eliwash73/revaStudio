import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtTokenStorage {

  private TOKEN_KEY = 'REVASTUDIO_JWT_TOKEN';

  setToken(token: string){
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null{
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeToken(){
    localStorage.removeItem(this.TOKEN_KEY);
  }
  
}
