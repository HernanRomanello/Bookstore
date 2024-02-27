import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getAllBooks(): string[] {
    return [
      'assets/images/books/1.jpg',
      'assets/images/books/2.jpg',
      'assets/images/books/3.jpg',
      'assets/images/books/4.jpg',
      'assets/images/books/5.jpg',
      'assets/images/books/6.jpg',
    ];
  }
}
// C:\Users\herna\Desktop\‏‏תיקיה חדשה\angular-Bookstore-Project\src\assets\images\books
// C:\Users\herna\Desktop\‏‏תיקיה חדשה\angular-Bookstore-Project\src\assets\images\books\1.jpg
