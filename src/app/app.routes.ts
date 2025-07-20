import { Routes } from '@angular/router';
import { Login } from './login/login';

export const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginLayoutComponent,
  //   children: [{ path: '', component: LoginPageComponent }]
  // },
  { path: 'login', loadComponent: () => import('./login/login').then(m => m.Login) },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
