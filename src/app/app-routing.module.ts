import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBooksComponent } from './components/search-books/search-books.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { Page404Component } from './components/page-404/page-404.component';
import { adminAuthGuard } from './Guards/admin-auth.guard';
import { AdminDashboardComponent } from './components/Admin-Panel/admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { userAuthGuard } from './Guards/user-auth.guard';
import { BookPageComponent } from './components/book-page/book-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { AdminBooklistComponent } from './components/Admin-Panel/admin-booklist/admin-booklist.component';
import { AdminAddbookComponent } from './components/Admin-Panel/admin-addbook/admin-addbook.component';
import { UpdateUsersDiscountComponent } from './components/Admin-Panel/update-users-discount/update-users-discount.component';
import { userAuthAlreadyLoggedGuard } from './Guards/user-auth-already-logged.guard';

const routes: Routes = [
  {
    path: '',
    component: SearchBooksComponent,
    title: 'Search Books',
  },
  {
    path: 'searchtitle/:title',
    component: SearchBooksComponent,
    title: 'Search Books',
  },
  { path: 'book/:id', component: BookPageComponent, title: 'Book Details' },
  {
    path: 'searchauthor/:author',
    component: SearchBooksComponent,
    title: 'Search Books',
  },
  {
    path: 'signin',
    component: SigninComponent,
    title: 'Sign in',
    canActivate: [userAuthAlreadyLoggedGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Sign up',
    canActivate: [userAuthAlreadyLoggedGuard],
  },

  {
    path: 'cart',
    component: CartPageComponent,
    title: 'Cart',
  },

  {
    path: 'admin',
    canActivate: [adminAuthGuard],
    children: [
      {
        path: '',
        component: AdminDashboardComponent,
        title: 'Admin Dashboard',
      },
      {
        path: 'booklist',
        component: AdminBooklistComponent,
        title: 'Book List',
      },
      {
        path: 'addbook/:id',
        component: AdminAddbookComponent,
        title: 'Add Book',
      },
      {
        path: 'updatediscount',
        component: UpdateUsersDiscountComponent,
        title: 'Update Users Discount',
      },
    ],
  },
  {
    path: 'profile',
    canActivate: [userAuthGuard], // Protect admin routes
    component: ProfileComponent,
    title: 'Profile',
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
