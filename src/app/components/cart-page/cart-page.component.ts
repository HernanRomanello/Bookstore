import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Cart } from '../../shared/models/cart';
import { CartItem } from '../../shared/models/cartItem';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent implements OnInit, OnDestroy {
  cart!: Cart;
  discountSub: Subscription | undefined;
  constructor(
    private cartServise: CartService,
    public authService: AuthService
  ) {
    this.setCart();
    this.discountSub = this.authService.user.subscribe((user) => {
      this.authService.priceDiscount = user?.priceDiscount || 1;
    });
  }
  ngOnDestroy(): void {
    if (this.discountSub) {
      this.discountSub.unsubscribe();
    }
  }
  removeFromCart(CartItem: CartItem) {
    this.cartServise.removeFromCart(CartItem.book.id);
    this.setCart();
  }
  changeQuantity(CartItem: CartItem, quantity: number) {
    this.cartServise.changeQuantity(CartItem.book.id, +quantity);
    this.setCart();
  }
  setCart() {
    this.cart = this.cartServise.getCart();
  }
  ngOnInit() {}
}
