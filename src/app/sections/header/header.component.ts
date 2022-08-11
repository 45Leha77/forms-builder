import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/User';
import { getUser } from '../../auth/State/auth.selector';
import { logout } from 'src/app/auth/State/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private store: Store) {}

  public user$: Observable<User | null> = this.store.pipe(select(getUser));

  public logout(): void {
    this.store.dispatch(logout());
  }
}
