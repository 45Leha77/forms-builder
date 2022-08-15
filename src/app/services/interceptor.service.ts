import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string | null = localStorage.getItem('token');
    const modifiedReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-auth-token': token ? token : '',
      }),
    });
    return next.handle(modifiedReq);
  }
}
