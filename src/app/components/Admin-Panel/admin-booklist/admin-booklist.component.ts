import { Component, OnInit, inject } from '@angular/core';
// import { AdminService } from '../../../services/admin/admin.service';
import { BooksService } from '../../../services/books/books.service';
import { CommonModule } from '@angular/common';
import { book } from '../../../shared/models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-booklist',
  templateUrl: './admin-booklist.component.html',
  styleUrls: [
    './admin-booklist.component.css',
    '../../cart-page/cart-page.component.css',
  ],
})
export class AdminBooklistComponent {
  constructor(public booksService: BooksService, private router: Router) {}

  moveEditBook(book: book) {
    this.router.navigate(['admin', 'addbook', book.id]);
  }
}
