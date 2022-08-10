import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { ElementStyle } from '../models/ElementStyle';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}

  public getElements(): Observable<ElementStyle[]> {
    return this.http.get<ElementStyle[]>(env.BASE_URL);
  }
}
