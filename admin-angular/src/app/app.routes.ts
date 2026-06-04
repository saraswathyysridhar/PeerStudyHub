import { Routes } from '@angular/router';
import { LoginComponent,isLoggedIn } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { HomeComponent } from './home/home';

import { PendingTips } from './pages/pending-tips/pending-tips';
import { ApprovedTipsComponent } from './pages/approved-tips/approved-tips';

//import { isLoggedIn } from './auth.guard'; // the function we created

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'pending', component: PendingTips, canActivate: [() => isLoggedIn()] },
  { path: 'approved', component: ApprovedTipsComponent, canActivate: [() => isLoggedIn()] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [() => isLoggedIn()] },
  
  { path: 'home', component: HomeComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } // wildcard route
];