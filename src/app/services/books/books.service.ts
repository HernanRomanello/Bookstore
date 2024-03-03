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
        summary:
          'In her book “Mostly What God Does,” Savannah Guthrie delves into the complexity of faith and how it affects resiliency and personal development. Guthrie explores the nuances of religion, skepticism, and the persistent force of hope via a variety of poignant experiences and musings',
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
        title: 'A Brief History of Time',
        author: 'Stephen Hawking',
        price: 9.99,
        coverImage: 'assets/images/books/7.jpg',
        pages: 352,
        publishedDate: 'February 2, 2021',
        publisher: 'St. Martin’s Press',
        language: 'English',
        dimentions: '6.1 x 1.2 x 8.91 inches',
        stars: 4,
        rating: 157,
        summary:
          'A simple summary of A Brief History of Time goes all the way from the beginning of the universe to its end, explaining things like space and time, the expanding universe, the uncertainty principle, black holes, wormholes, and time travel along the way.',
      },

      {
        id: 8,
        title: 'Change Your Brain, Change Your Life',
        author: 'Daniel G. Amen M.D. ',
        price: 13.96,
        coverImage: 'assets/images/books/8.jpg',
        pages: 480,
        publishedDate: 'March 8, 2015',
        publisher: 'Ballantine Books',
        language: 'English',
        dimentions: '6.7 x 1.2 x 7.6 inches',
        summary:
          '"Change Your Brain, Change Your Life" by Dr. Daniel G. Amen is a guide to optimizing brain function through nutrition, exercise, and lifestyle changes. It explores brain imaging and offers insight into how to enhance memory, mood, and focus for a healthier and happier life.',
      },
      {
        id: 9,
        title: 'Getting More',
        author: 'Stuart Diamond ',
        price: 18.49,
        coverImage: 'assets/images/books/9.jpg',
        pages: 416,
        publishedDate: 'October 23, 2012',
        language: 'English',
        dimentions: '5.8 x 0.9 x 8.3 inches',
        stars: 3.4,
        rating: 457,
        summary:
          'Getting More by Stuart Diamond is a negotiation guidebook that teaches you how to have successful conversations by focusing on understanding and meeting the other sides needs. It provides practical tips for problem-solving and building stronger relationships. ',
      },
    ];
  }
}
