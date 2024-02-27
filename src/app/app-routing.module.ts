import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBooksComponent } from './components/search-books/search-books.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { Page404Component } from './components/page-404/page-404.component';
import { adminAuthGuard } from './Guards/admin-auth.guard';
import { AdminloginComponent } from './components/Admin-Panel/adminlogin/adminlogin.component';
import { AdminDashboardComponent } from './components/Admin-Panel/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: SearchBooksComponent,
    title: 'Search Books',
  },
  {
    path: 'signin',
    component: SigninComponent,
    title: 'Sign in',
    // resolve: { user: usersResolver },
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Sign up',
    // resolve: { user: usersResolver },
  },
  {
    path: 'admin',
    canActivate: [adminAuthGuard], // Protect admin routes
    children: [
      { path: '', component: AdminloginComponent }, // Admin login page
      { path: 'dashboard', component: AdminDashboardComponent }, // Admin dashboard
    ],
  },

  {
    path: '**',
    component: Page404Component,
    title: 'Page Not Found',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
