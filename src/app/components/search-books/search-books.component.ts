import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books/books.service';
import { AuthService } from '../../services/auth.service';
import { book } from '../../shared/models/book';
import { last } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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
  booksFromlocalStorage: book[] = []; // This should be an array of book objects

  booksFirstIndex: number = 0;
  booksLastIndex: number = 3;
  prevButtonActive: boolean = false;
  nextButtonActive: boolean = true;
  discount: number = this.authService.priceDiscount;
  constructor(
    private booksservice: BooksService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (this.authService.user) {
      this.discount = this.authService.user.priceDiscount || 1;
    }
  }

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
          this.saveBooksToLocal();
          const storedData = localStorage.getItem('books');
          if (storedData) {
            this.books = JSON.parse(storedData); // Parse JSON string to array
            // let bookToUpdate = books.find(book => book.id === 2);
            let bookToUpdate = this.books.find((book) => book.id === 2);
            // if (bookToUpdate) {
            //   // Update the title
            //   bookToUpdate.title = 'New Title';
            // }
            // localStorage.setItem('books', JSON.stringify(this.books));
          }
        }
        this.hideButtons(); // Ensure that the hideButtons function is called after updating the books array
      });
    });
  }
  saveBooksToLocal(): void {
    // Serialize books array to JSON string and save to local storage
    localStorage.setItem('books', JSON.stringify(this.books));
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
    this.booksFirstIndex -= 3;
    this.booksLastIndex -= 3;
    this.hideButtons();
    window.scrollTo(0, 0);
  }
  nextPage() {
    this.booksFirstIndex += 3;
    this.booksLastIndex += 3;
    this.hideButtons();
    window.scrollTo(0, 0);
  }

  goToPage(pageNumber: number) {
    this.booksLastIndex = pageNumber * 3;
    this.booksFirstIndex = this.booksLastIndex - 3;
    this.hideButtons();
    window.scrollTo(0, 0);
  }
}
