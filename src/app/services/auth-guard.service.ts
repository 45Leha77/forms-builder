import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { getAuthToken } from '../auth/State/auth.selector';
import { AppState } from '../Store/App.State';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let localStorageToken = localStorage.getItem('token');
    if (localStorageToken) {
      return true;
    }
    return this.store.select(getAuthToken).pipe(
      map((token: string | null) => {
        if (!token) {
          console.error('User has to be authorized');
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
