import { Component, OnInit } from '@angular/core';

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
  books: any[] = []; // This should be an array of book objects

  constructor() {}

  ngOnInit(): void {
    this.addBooks(); // Call the function to add books when the component initializes
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
