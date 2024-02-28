import { Injectable } from '@angular/core';
import { book } from '../../shared/models/book';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private router: Router) {}

  getBookById(id: number): book {
    return this.getAllBooks().find((book) => book.id === id)!;
  }

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
        summary:
          'In her book “Mostly What God Does,” Savannah Guthrie delves into the complexity of faith and how it affects resiliency and personal development. Guthrie explores the nuances of religion, skepticism, and the persistent force of hope via a variety of poignant experiences and musings.',
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
      {
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        id: 11,
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
        id: 12,
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
      {
        id: 13,
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
      {
        id: 14,
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
      {
        id: 15,
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
      {
        id: 16,
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
      {
        id: 17,
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
      {
        id: 18,
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
      {
        id: 19,
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
      {
        id: 20,
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
      {
        id: 21,
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
      {
        id: 22,
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
      {
        id: 23,
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
      {
        id: 24,
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

      {
        id: 25,
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
        id: 26,
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
        id: 27,
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
        id: 28,
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
        id: 29,
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
        id: 30,
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
        id: 31,
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
        id: 32,
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
        id: 33,
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
        id: 34,
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
        id: 35,
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
        id: 36,
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
    ];
  }
}
