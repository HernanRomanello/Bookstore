// import { Injectable } from '@angular/core';
// import { Cart } from '../../shared/models/cart';
// import { book } from '../../shared/models/book';
// import { CartItem } from '../../shared/models/cartItem';

// @Injectable({
//   providedIn: 'root',
// })
// export class CartService {
//   cart: Cart = new Cart();

//   constructor() {}

//   addToCart(book: book): void {
//     const cartItem = this.cart.Items.find((item) => item.book.id === book.id);
//     if (cartItem) {
//       this.changeQuantity(book.id, cartItem.quantity + 1);
//       return;
//     }
//     this.cart.Items.push(new CartItem(book));
//   }
//   removeFromCart(bookId: number): void {
//     this.cart.Items = this.cart.Items.filter((item) => item.book.id !== bookId);
//   }
//   changeQuantity(bookId: number, quantity: number): void {
//     const cartItem = this.cart.Items.find((item) => item.book.id === bookId);
//     if (!cartItem) return;
//     cartItem.quantity = quantity;
//   }
//   getCart(): Cart {
//     return this.cart;
//   }
// }
