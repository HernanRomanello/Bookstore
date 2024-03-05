import { Component, OnInit } from '@angular/core';
import { book } from '../../shared/models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books/books.service';
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../../shared/models/cartItem';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css',
})
export class BookPageComponent implements OnInit {
  book!: book;
  discount: number = 1;
  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService,
    private cartService: CartService,
    private router: Router,
    private authService: AuthService
  ) {
    if (this.authService.user) {
      this.discount = this.authService.user.priceDiscount || 1;
    }
    this.route.params.subscribe((params) => {
      if (params['id']) {
        console.log(params['id']);
        this.book = this.bookService.getBookById(+params['id']);
        console.log(this.book);
      }
    });
  }

  ngOnInit(): void {}

  addToCart(navigateToCart: boolean) {
    this.cartService.addToCart(this.book);
    if (navigateToCart) {
      this.router.navigate(['/cart']);
    } else {
    }
  }
}
