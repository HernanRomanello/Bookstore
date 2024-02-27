import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books/books.service';
import { AuthService } from '../../services/auth.service';
import { book } from '../../shared/models/book';
import { last } from 'rxjs';

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
  booksFirstIndex: number = 0;
  booksLastIndex: number = 12;
  prevButtonActive: boolean = false;
  nextButtonActive: boolean = true;

  constructor(
    private booksservice: BooksService,
    private authService: AuthService
  ) {}

  hideButtons() {
    if (this.booksFirstIndex === 0) {
      this.prevButtonActive = false;
    } else {
      this.prevButtonActive = true;
    }

    if (this.booksLastIndex >= this.books.length) {
      this.nextButtonActive = false;
    } else {
      this.nextButtonActive = true;
    }
  }

  ngOnInit(): void {
    // this.addBooks(); // Call the function to add books when the component initializes
    this.books = this.booksservice.getAllBooks();
    this.hideButtons();
  }

  searchBooks() {
    // Implement search functionality here
    // You can filter books based on the search query, selected filter, minPrice, and maxPrice
    // Update the this.books array with the filtered results
  }

  prevPage() {
    this.booksFirstIndex -= 12;
    this.booksLastIndex -= 12;
    this.hideButtons();
  }
  nextPage() {
    this.booksFirstIndex += 12;
    this.booksLastIndex += 12;
    this.hideButtons();
  }

  addBooks() {
    // Generate or fetch your books data here and update this.books array
    // This function should initialize this.books with the list of books
  }
}
