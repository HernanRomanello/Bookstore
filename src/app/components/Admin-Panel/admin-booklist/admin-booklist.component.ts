import { Component, OnInit, inject } from '@angular/core';
// import { AdminService } from '../../../services/admin/admin.service';
import { BooksService } from '../../../services/books/books.service';
import { CommonModule } from '@angular/common';
import { book } from '../../../shared/models/book';

@Component({
  selector: 'app-admin-booklist',
  templateUrl: './admin-booklist.component.html',
  styleUrls: [
    './admin-booklist.component.css',
    '../../cart-page/cart-page.component.css',
  ],
})
export class AdminBooklistComponent implements OnInit {
  // adminService = inject(AdminService);
  books: book[] = [];
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    const storedData = localStorage.getItem('books');
    if (storedData) {
      alert('Data found in local storage');
      this.books = JSON.parse(storedData); // Parse JSON string to array
      console.log(this.books);
    }
  }
}
