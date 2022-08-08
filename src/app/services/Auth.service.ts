import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from '../models/AuthResponse';
import { User } from '../models/User';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<AuthResponse>('http://localhost:3000/signin', {
      email,
      password,
    });
  }

  setAuthDataToLocalStorage(response: AuthResponse) {
    localStorage.setItem('token', response.accessToken);
    localStorage.setItem('user', JSON.stringify(response.user));
  }

  getTokenFromLocalStorage(): string {
    const token = localStorage.getItem('token')!;
    return token;
  }

  getUserFromLocalStorage(): User {
    const user = localStorage.getItem('user')!;
    return JSON.parse(user);
  }
}
