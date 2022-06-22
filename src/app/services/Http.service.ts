import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { ElementStyle } from '../models/ElementStyle';


@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) {}

  getElements() {
    return this.http.get<ElementStyle[]>(env.BASE_URL);
  }
}
