import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBooksComponent } from './components/search-books/search-books.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { Page404Component } from './components/page-404/page-404.component';

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
