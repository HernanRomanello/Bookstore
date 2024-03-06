import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { Page404Component } from './components/page-404/page-404.component';
import { SearchBooksComponent } from './components/search-books/search-books.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminloginComponent } from './components/Admin-Panel/adminlogin/adminlogin.component';
import { AdminDashboardComponent } from './components/Admin-Panel/admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BookPageComponent } from './components/book-page/book-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CartService } from './services/cart/cart.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment.development';
import { AdminAddbookComponent } from './components/Admin-Panel/admin-addbook/admin-addbook.component';
import { AdminBooklistComponent } from './components/Admin-Panel/admin-booklist/admin-booklist.component';
import { UpdateUsersDiscountComponent } from './components/Admin-Panel/update-users-discount/update-users-discount.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Page404Component,
    SearchBooksComponent,
    SignupComponent,
    SigninComponent,
    AdminDashboardComponent,
    ProfileComponent,
    BookPageComponent,
    CartPageComponent,
    AdminAddbookComponent,
    AdminBooklistComponent,
    UpdateUsersDiscountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
  ],
  providers: [provideClientHydration(), CartService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
