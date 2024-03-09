import { CartItem } from './cartItem';

export class Cart {
  constructor() {
    this.totalPrice;
  }
  Items: CartItem[] = [];
  get totalPrice(): number {
    let totalPrice = 0;
    this.Items.forEach((item) => (totalPrice += item.price));
    return totalPrice;
  }
  get totalItems(): number {
    return this.Items.reduce((number, item) => number + item.quantity, 0);
  }
}
