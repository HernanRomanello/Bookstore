import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Cart } from '../../shared/models/cart';
import { CartItem } from '../../shared/models/cartItem';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  discount: number = 1;

  constructor(
    private cartServise: CartService,
    private authService: AuthService
  ) {
    this.setCart();
    if (this.authService.user) {
      this.discount = this.authService.user.priceDiscount || 1;
    }
  }
  removeFromCart(CartItem: CartItem) {
    this.cartServise.removeFromCart(CartItem.book.id);
    this.setCart();
  }
  changeQuantity(CartItem: CartItem, quantity: number) {
    this.cartServise.changeQuantity(CartItem.book.id, +quantity);
    // console.log(quantity);
    this.setCart();
  }
  setCart() {
    this.cart = this.cartServise.getCart();
  }
  ngOnInit() {}
}
