import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Cart } from '../../shared/models/cart';
import { CartItem } from '../../shared/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartServise: CartService) {}
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
