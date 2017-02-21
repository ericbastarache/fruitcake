import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';

export const AppRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];
