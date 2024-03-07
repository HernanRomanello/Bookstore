import { Component, OnDestroy, OnInit } from '@angular/core';
import { book } from '../../shared/models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../../services/books/books.service';
import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../../shared/models/cartItem';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css',
})
export class BookPageComponent implements OnInit, OnDestroy {
  book!: book;
  discountSub: Subscription | undefined;
  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService,
    private cartService: CartService,
    private router: Router,
    public authService: AuthService
  ) {
    this.discountSub = this.authService.user.subscribe((user) => {
      this.authService.priceDiscount = user?.priceDiscount || 1;
    });
    this.route.params.subscribe((params) => {
      if (params['id']) {
        console.log(params['id']);
        this.book = this.bookService.getBookById(+params['id']);
        console.log(this.book);
      }
    });
  }
  ngOnDestroy(): void {
    if (this.discountSub) {
      this.discountSub.unsubscribe();
    }
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
