import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../models/User';
import { getUser } from '../../auth/State/auth.selector';
import { logout } from 'src/app/auth/State/auth.actions';
import { appearingAnimation } from 'src/app/shared/animations/appearing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [appearingAnimation],
})
export class HeaderComponent {
  constructor(private store: Store) {}

  public isUserInfoVisible: boolean = false;

  public user$: Observable<User | null> = this.store.pipe(select(getUser));

  public logout(): void {
    this.store.dispatch(logout());
  }

  public toggleUserVisibility() {
    this.isUserInfoVisible = !this.isUserInfoVisible;
  }
}
