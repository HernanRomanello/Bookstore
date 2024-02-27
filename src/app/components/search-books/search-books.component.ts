import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books/books.service';
import { AuthService } from '../../services/auth.service';
import { book } from '../../shared/models/book';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrl: './search-books.component.css',
})
export class SearchBooksComponent implements OnInit {
  searchQuery: string = '';
  selectedFilter: string = 'title';
  minPrice: number = 0;
  maxPrice: number = 0;
  books: book[] = []; // This should be an array of book objects

  constructor(
    private booksservice: BooksService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // this.addBooks(); // Call the function to add books when the component initializes
    this.books = this.booksservice.getAllBooks();
  }

  searchBooks() {
    // Implement search functionality here
    // You can filter books based on the search query, selected filter, minPrice, and maxPrice
    // Update the this.books array with the filtered results
  }

  addBooks() {
    // Generate or fetch your books data here and update this.books array
    // This function should initialize this.books with the list of books
  }
}
