import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books/books.service';
import { AuthService } from '../../services/auth.service';
import { book } from '../../shared/models/book';
import { last } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router'; // Import the ActivatedRoute and Router classes

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
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
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
    this.route.params.subscribe((params) => {
      this.route.params.subscribe((params) => {
        if (params['title']) {
          const searchTerm = params['title'].toLowerCase(); // Convert to lowercase for case-insensitive matching
          this.books = this.booksservice.getAllBooks().filter((book) => {
            return book.title.toLowerCase().includes(searchTerm);
          });
        } else if (params['author']) {
          const searchAuthor = params['author'].toLowerCase(); // Convert to lowercase for case-insensitive matching
          this.books = this.booksservice.getAllBooks().filter((book) => {
            return book.author.toLowerCase().includes(searchAuthor);
          });
        } else {
          this.books = this.booksservice.getAllBooks();
        }
        this.hideButtons(); // Ensure that the hideButtons function is called after updating the books array
      });
    });
  }

  searchBooks(
    searchQuery: string,
    selectedFilter: string,
    minPrice: number,
    maxPrice: number
  ) {
    if (selectedFilter === 'title') {
      this.router.navigate(['/searchtitle', searchQuery]);
    } else {
      this.router.navigate(['/searchauthor', searchQuery]);
    }
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

  goToPage(pageNumber: number) {
    this.booksLastIndex = pageNumber * 12;
    this.booksFirstIndex = this.booksLastIndex - 12;
    this.hideButtons();
  }
}
