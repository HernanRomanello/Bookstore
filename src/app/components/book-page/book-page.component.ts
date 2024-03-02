import { Component, OnInit } from '@angular/core';
import { book } from '../../shared/models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books/books.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css',
})
export class BookPageComponent implements OnInit {
  book!: book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService,
    private cartService: CartService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        console.log(params['id']);
        this.book = this.bookService.getBookById(+params['id']);
        console.log(this.book);
      }
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.book);
    // this.cartService.addToCart(this.book);
    // this.router.navigateByUrl('/cart');
    this.router.navigate(['/cart']);
  }
}
