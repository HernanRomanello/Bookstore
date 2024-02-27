import { Injectable } from '@angular/core';
import { book } from '../../shared/models/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  getAllBooks(): book[] {
    return [
      {
        id: 1,
        title: 'The Women',
        author: 'Kristin Hannah',
        price: 15.5,
        coverImage: 'assets/images/books/1.jpg',
        pages: 352,
        publishedDate: 'February 2, 2021',
        publisher: 'St. Martin’s Press',
        language: 'English',
        dimentions: '6.4 x 1.2 x 9.6 inches',
        stars: 4,
        rating: 157,
      },

      {
        id: 2,
        title: 'Mostly What God Does',
        author: 'Savannah Guthrie',
        price: 19.96,
        coverImage: 'assets/images/books/2.jpg',
        pages: 320,
        publishedDate: 'March 8, 2022',
        publisher: 'Ballantine Books',
        language: 'English',
        dimentions: '6.4 x 1.2 x 9.6 inches',
        stars: 4.8,
        rating: 197,
      },
      {
        id: 3,
        title: 'Dog Man',
        author: 'Dav Pilkey',
        price: 10.49,
        coverImage: 'assets/images/books/3.jpg',
        pages: 240,
        publishedDate: 'March 23, 2021',
        language: 'English',
        dimentions: '5.8 x 0.9 x 8.3 inches',
        stars: 3.4,
        rating: 457,
      },
      {
        id: 4,
        title: 'Blood Money',
        author: 'Peter Schweizer',
        price: 22.5,
        coverImage: 'assets/images/books/4.jpg',
        pages: 368,
        publishedDate: 'March 11, 2022',
        publisher: 'Harper',
        language: 'English',
        dimentions: '6.4 x 1.2 x 9.6 inches',
        stars: 2.4,
        rating: 857,
      },
      {
        id: 5,
        title: 'Atomic Habits',
        author: 'James Clear and Penguin Audio',
        price: 13.79,
        coverImage: 'assets/images/books/5.jpg',
        pages: 320,
        publishedDate: 'October 16, 2018',
        publisher: 'Avery',
        language: 'English',
        dimentions: '5.8 x 0.9 x 8.3 inches',
        stars: 3.8,
        rating: 257,
      },
      {
        id: 6,
        title: 'Worthy',
        author: 'Jamie Kern Lima',
        price: 18.9,
        coverImage: 'assets/images/books/6.jpg',
        pages: 352,
        publishedDate: 'March 8, 2022',
        publisher: 'Ballantine Books',
        language: 'English',
        dimentions: '6.4 x 1.2 x 9.6 inches',
        stars: 4,
        rating: 127,
      },
    ];
  }
}
