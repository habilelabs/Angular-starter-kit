import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'home', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'signup', loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule), canActivate: [AuthGuard] },
  { path: 'error', loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule), canActivate: [AuthGuard] },
  { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule), canActivate: [AuthGuard]},
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule), canActivate: [AuthGuard]},
  { path: '**', loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule), canActivate: [AuthGuard] },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
