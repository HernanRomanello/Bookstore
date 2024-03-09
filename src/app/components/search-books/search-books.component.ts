import { Component, OnDestroy, OnInit, afterNextRender } from '@angular/core';
import { BooksService } from '../../services/books/books.service';
import { AuthService } from '../../services/auth.service';
import { book } from '../../shared/models/book';
import { BehaviorSubject, Observable, Subscription, filter, last } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrl: './search-books.component.css',
})
export class SearchBooksComponent implements OnInit, OnDestroy {
  searchQuery: string = '';
  selectedFilter: string = 'title';
  minPrice: number = 0;
  maxPrice: number = 0;
  $books = new BehaviorSubject<book[]>([]);

  booksFromlocalStorage: book[] = []; // This should be an array of book objects

  booksFirstIndex: number = 0;
  booksLastIndex: number = 8;
  prevButtonActive: boolean = false;
  nextButtonActive: boolean = true;
  discountSub: Subscription | undefined;
  booksSub: Subscription | undefined;
  priceDiscount: number = 1;
  bookPagingIndices: number[] = [];
  constructor(
    private booksservice: BooksService,
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.discountSub = this.authService.user.subscribe((user) => {
      this.authService.priceDiscount = user?.priceDiscount || 1;
      if (this.authService.priceDiscount != 1) {
        this.authService.priceDiscount = 1 - this.authService.priceDiscount;
      }
    });
    this.booksSub = this.$books.subscribe((books) => {
      this.bookPagingIndices = [];
      for (let i = 0; i < books.length / 8; i++) {
        this.bookPagingIndices.push(i);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.discountSub) {
      this.discountSub.unsubscribe();
    }
    if (this.booksSub) {
      this.booksSub.unsubscribe();
    }
  }

  hideButtons() {
    if (this.booksFirstIndex === 0) {
      this.prevButtonActive = false;
    } else {
      this.prevButtonActive = true;
    }

    if (this.booksLastIndex >= this.$books.getValue().length) {
      this.nextButtonActive = false;
    } else {
      this.nextButtonActive = true;
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const books = this.booksservice.getAllBooks();

      if (params['title']) {
        const searchTerm = params['title'].toLowerCase(); // Convert to lowercase for case-insensitive matching
        this.$books.next(
          books.filter((book) => book.title.toLowerCase().includes(searchTerm))
        );
      } else if (params['author']) {
        const searchAuthor = params['author'].toLowerCase(); // Convert to lowercase for case-insensitive matching
        this.$books.next(
          books.filter((book) =>
            book.author.toLowerCase().includes(searchAuthor)
          )
        );
      } else {
        this.$books.next(books);
      }
      this.hideButtons(); // Ensure that the hideButtons function is called after updating the books array
    });
  }

  searchBooks(searchQuery: string, selectedFilter: string) {
    if (selectedFilter === 'title') {
      this.router.navigate(['/searchtitle', searchQuery]);
    } else {
      this.router.navigate(['/searchauthor', searchQuery]);
    }
  }

  prevPage() {
    this.booksFirstIndex -= 8;
    this.booksLastIndex -= 8;
    this.hideButtons();
    window.scrollTo(0, 0);
  }
  nextPage() {
    this.booksFirstIndex += 8;
    this.booksLastIndex += 8;
    this.hideButtons();
    window.scrollTo(0, 0);
  }

  goToPage(pageNumber: number) {
    this.booksLastIndex = (pageNumber + 1) * 8;
    this.booksFirstIndex = pageNumber * 8;
    this.hideButtons();
    window.scrollTo(0, 0);
  }
}
