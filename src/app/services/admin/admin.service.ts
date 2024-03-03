import { Injectable } from '@angular/core';
import { BooksService } from '../books/books.service';
import { UsersService } from '../user/users.service';
import { Database, ref, set, push, update } from '@angular/fire/database';
import { deleteObject } from '@angular/fire/storage';

import { Book } from '../../shared/models/book';
import {
  Storage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(
    private bookService: BooksService,
    private usersService: UsersService,
    private database: Database,
    private storage: Storage
  ) {}

  async updateUserDiscount(userId: string, discount: number): Promise<void> {
    const users = this.usersService.users.value;
    const user = users.find((user) => user.id === userId)!;
    user.discount = discount;
    set(ref(this.database, 'users'), users);
  }

  async addBook(
    book: Book,
    coverImage: File | null | undefined
  ): Promise<void> {
    const books = this.bookService.books.value;
    books.push(book);

    if (coverImage) {
      const ourRef = storageRef(
        this.storage,
        `books/${book.title}_${book.author}`
      );
      await uploadBytes(ourRef, coverImage);
      const url = await getDownloadURL(ourRef);
      book.coverImage = url;
    }

    const newRef = await push(ref(this.database, 'books'), book);
    book.id = newRef.key!;
    update(newRef, book);
  }

  removeBook(bookId: string): void {
    const books = this.bookService.books.value;
    const book = books.find((book) => book.id === bookId)!;
    const newBooks = books.filter((book) => book.id != bookId);

    const bookStorageRef = storageRef(
      this.storage,
      `books/${book.title}_${book.author}`
    );
    deleteObject(bookStorageRef);

    set(ref(this.database, 'books'), newBooks);
  }
}
