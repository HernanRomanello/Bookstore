import { book } from './book';

export class CartItem {
  constructor(book: book) {
    this.book = book;
    this.price;
  }
  book!: book;
  quantity: number = 1;
  get price(): number {
    return this.book.price * this.quantity;
  }

  Items: CartItem[] = [];
}
