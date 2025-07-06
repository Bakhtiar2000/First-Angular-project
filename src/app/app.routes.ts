import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master';
import { EmployeeComponent } from './components/employee/employee';
import { ClientComponent } from './components/client/client.component';
import { ClientProjectComponent } from './components/client-project/client-project';
import { LoginComponent } from './components/login/login';
import { LayoutComponent } from './components/layout/layout';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [authGuard],
    children: [
      {
        path: 'master',
        component: MasterComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'client',
        component: ClientComponent,
        canActivate: [authGuard],
      },
      {
        path: 'client-project',
        component: ClientProjectComponent,
      },
    ],
  },
];
