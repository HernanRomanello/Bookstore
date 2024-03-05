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

  // get totalItems(): number {
  //   // return this.Items.reduce((acc, item) => acc + item.quantity, 0);
  //   // return Items.reduce((acc , item)) => acc + item.quantity,0);
  //   return this.Items.reduce((number, item) => number + item.quantity, 0);
  // }
}
