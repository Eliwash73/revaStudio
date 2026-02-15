import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { HomeComponent } from './components/home/home';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: Login },
  { path: 'home', component: HomeComponent },
  { path: 'customer-dashboard', component: CustomerDashboardComponent, canActivate: [AuthGuard] },
  { path: 'employee-dashboard', component: EmployeeDashboardComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' },
];
