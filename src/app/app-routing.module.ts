import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/login/auth.component';

const routes: Routes = [
  {
    path: 'forms-builder',
    loadChildren: () =>
      import('./sections/sections.module').then(
        ({ SectionsModule }) => SectionsModule
      ),
  },
  {
    path: 'login',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
