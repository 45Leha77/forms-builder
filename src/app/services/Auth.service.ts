import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/AuthResponse';
import { User } from '../models/User';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<any> {
    return this.http.post<AuthResponse>('http://localhost:3000/signin', {
      email,
      password,
    });
  }

  public setAuthDataToLocalStorage(response: AuthResponse): void {
    localStorage.setItem('token', response.accessToken);
    localStorage.setItem('user', JSON.stringify(response.user));
  }

  public getTokenFromLocalStorage(): string {
    const token: string = localStorage.getItem('token')!;
    return token;
  }

  public getUserFromLocalStorage(): User {
    const user: string = localStorage.getItem('user')!;
    return JSON.parse(user);
  }
}
