import { Injectable, afterNextRender } from '@angular/core';
import { book } from '../../shared/models/book';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: BehaviorSubject<book[]> = new BehaviorSubject<book[]>([]);
  constructor(private router: Router) {
    afterNextRender(() => {
      this.books.next(this.getAllBooks());
    });
  }

  updateBook(id: number, book: Partial<book>): void {
    const books = this.books.getValue();
    const bookIndex = this.books.getValue().findIndex((book) => book.id === id);
    books[bookIndex] = { ...books[bookIndex], ...book };
    this.saveBooksToLocal(books);
  }

  deleteBook(id: number): void {
    this.books.next(this.books.getValue().filter((book) => book.id !== id));
    this.saveBooksToLocal(this.books.value);
  }

  insertBook(book: book): void {
    this.books.next([...this.books.getValue(), book]);
    this.saveBooksToLocal(this.books.value);
  }

  getBookById(id: number): book {
    return this.books.getValue().find((book) => book.id === id)!;
  }

  getBooksFromLocal() {
    return JSON.parse(localStorage.getItem('books') || '[]');
  }

  saveBooksToLocal(books: book[]): void {
    // Serialize books array to JSON string and save to local storage
    localStorage.setItem('books', JSON.stringify(books));
    this.books.next(books);
  }

  getAllBooks(): book[] {
    const books = this.getBooksFromLocal();
    if (books.length > 0) {
      return books;
    }
    const allBooks = [
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

        summary:
          'Getting More by Stuart Diamond is a negotiation guidebook that teaches you how to have successful conversations by focusing on understanding and meeting the other sides needs. It provides practical tips for problem-solving and building stronger relationships. ',
      },
      {
        id: 10,
        title: 'Diary of a Wimpy Kid',
        author: 'Jeff Kinney',
        price: 8.49,
        coverImage: 'assets/images/books/10.jpg',
        pages: 224,
        publishedDate: 'March 11, 2022',
        publisher: 'Harper',
        language: 'English',
        dimentions: '6.4 x 1.2 x 9.6 inches',
        summary:
          'Greg Heffley is a normal American kid, albeit one with a habit of getting into (and out of) trouble. His diary, complete with hilarious cartoons, records a year in his life and follows his relationships with his nerdy best friend Rowley, annoying brothers Roderick and Manny and long-suffering ',
      },
      {
        id: 11,
        title: 'Middlesex: A Novel',
        author: 'Jeffrey Eugenides',
        price: 14.99,
        coverImage: 'assets/images/books/11.jpg',
        pages: 529,
        publishedDate: 'March 4, 1995',
        publisher: 'Farrar, Straus and Giroux',
        language: 'English',
        dimentions: '5.8 x 0.9 x 8.3 inches',
        summary:
          'Middlesex is a Pulitzer Prize-winning novel by Jeffrey Eugenides that tells the story of Calliope Stephanides, a hermaphrodite who grows up in a Greek-American family in Detroit. The novel explores themes',
      },
      {
        id: 12,
        title: 'Midnights Children',
        author: 'Salman Rushdie',
        price: 12.99,
        coverImage: 'assets/images/books/12.jpg',
        pages: 536,
        publishedDate: 'September 4, 2002',
        publisher: 'Farrar, Straus and Giroux',
        language: 'English',
        dimentions: '5.8 x 0.9 x 8.3 inches',
        summary:
          'Midnight’s Children is a novel by Salman Rushdie that tells the story of Saleem Sinai, who was born at the exact moment of India’s independence from British rule. The novel explores the history of India and Pakistan and the lives of its citizens.',
      },
      {
        id: 13,
        title: 'The Corrections',
        author: 'Jonathan Franzen',
        price: 18.99,
        coverImage: 'assets/images/books/13.jpg',
        pages: 576,
        publishedDate: 'March 4, 2005',
        publisher: 'Farrar, Straus and Giroux',
        language: 'English',
        dimentions: '5.8 x 0.9 x 8.3 inches',
        summary:
          'The Corrections is a novel by Jonathan Franzen that tells the story of the Lambert family. The novel explores the lives of the family members and the ways they try to correct their lives and relationships.',
      },
      {
        id: 14,
        title: 'The One Man',
        author: 'Andrew Gross',
        price: 14.99,
        coverImage: 'assets/images/books/14.jpg',
        pages: 432,
        publishedDate: 'September 4, 2002',
        publisher: 'Farrar, Straus and Giroux',
        language: 'English',
        dimentions: '5.8 x 0.9 x 8.3 inches',
        summary:
          'The One Man is a tale of one man, Nathan Blum, who is sent on a heroic and courageous mission to rescue one man, electromagnetic physics professor Alfred Mendl from a concentration camp. Blum was only given 72 hours to find and rescue Mendl.',
      },
      {
        id: 15,
        title: 'Too Bright to Hear Too Loud to See',
        author: 'Juliann Garey',
        price: 12.99,
        coverImage: 'assets/images/books/15.jpg',
        pages: 336,
        publishedDate: 'September 4, 2002',
        publisher: 'Farrar, Straus and Giroux',
        language: 'English',
        dimentions: '5.8 x 0.9 x 8.3 inches',
        summary:
          'Too Bright to Hear Too Loud to See is a novel by Juliann Garey that tells the story of Greyson Todd, a successful Hollywood executive who is struggling with bipolar disorder. The novel explores Todd’s life and his struggles with mental illness.',
      },
      {
        id: 16,
        title: 'The Great Alone',
        author: 'Kristin Hannah',
        price: 13.99,
        coverImage: 'assets/images/books/16.jpg',
        pages: 448,
        publishedDate: 'September 4, 2002',
        publisher: 'Farrar, Straus and Giroux',
        language: 'English',
        dimentions: '5.8 x 0.9 x 8.3 inches',
        summary:
          'The Great Alone is a novel by Kristin Hannah that tells the story of the Allbright family, who move to Alaska in the 1970s. The novel explores the family’s struggles to survive in the harsh Alaskan wilderness and the impact of the environment on their lives.',
      },
      {
        id: 17,
        title: 'True Colors',
        author: 'Kristin Hannah',
        price: 18.99,
        coverImage: 'assets/images/books/17.jpg',
        pages: 400,
        publishedDate: 'February  4, 2009',
        publisher: 'Brilliance Audio',
        language: 'English',
        dimentions: '5.2 x 1.9 x 8.3 inches',
        summary:
          'True Colors is the story of 3 sisters in a small town in Washington as they try to keep their family ranch afloat, find love, and live their lives. Ultimately, none of the characters in the book was terribly likable. Two of the sisters in particular both came off incredibly self-absorbed.',
      },
      {
        id: 18,
        title: 'The Fifth Column',
        author: 'Andrew Gross',
        price: 22.99,
        coverImage: 'assets/images/books/18.jpg',
        pages: 250,
        publishedDate: 'September 4, 2019',
        publisher: ' Macmillan Audio',
        language: 'English',
        dimentions: '5.8 x 0.9 x 6.3 inches',
        summary:
          'The play concerns the activities of counter-espionage agent Philip Rawlings, a hard-drinking mans man and Communist party operative posing as a war correspondent. He works out of the Florida hotel, tracking down members of the  Fascist sympathizers working from within against Loyalist',
      },
      {
        id: 19,
        title: 'Distant Shores',
        author: 'Kristin Hannah',
        price: 6.99,
        coverImage: 'assets/images/books/19.jpg',
        pages: 300,
        publishedDate: 'October  4, 2008',
        publisher: 'Brilliance Audio',
        language: 'English',
        dimentions: '5.8 x 0.9 x 8.3 inches',
        summary:
          'Elizabeth and Jackson Shore married young, raised two daughters, and weathered the storms of youth as they built a future together. But after the children leave home, they quietly drift apart. When Jack accepts a wonderful new job offer, Elizabeth puts her needs aside to follow him across the country.',
      },
      {
        id: 20,
        title: 'The Five-Star Weekend',
        author: 'Elin Hilderbrand',
        price: 18.99,
        coverImage: 'assets/images/books/20.jpg',
        pages: 640,
        publishedDate: 'September 14, 2023',
        publisher: 'Little, Brown and Company',
        language: 'English',
        dimentions: '5.8 x 0.9 x 6.3 inches',
        summary:
          'The Five-Star Weekend is a lighthearted, engaging tale that takes you into the life of Hollis Shaw, a middle-aged successful food blogger who, after returning to her hometown of Nantucket, invites four friends, one from each stage of her life, to spend a weekend at her home on the island to help her come to grips with .',
      },
      {
        id: 21,
        title: 'The Wanderer',
        author: 'Robyn Carr',
        price: 38.99,
        coverImage: 'assets/images/books/21.jpg',
        pages: 500,
        publishedDate: 'March  14, 2023',
        publisher: 'MIRA',
        language: 'English',
        dimentions: '5.8 x 0.9 x 8.3 inches',
        summary:
          'The Wanderer conveys the meditations of a solitary exile on his past happiness as a member of his lords band of retainers, his present hardships and the values of forbearance and faith in the heavenly Lord.',
      },
      {
        id: 22,
        title: 'Under the Lights',
        author: 'Shannon Stacey',
        price: 14.99,
        coverImage: 'assets/images/books/22.jpg',
        pages: 132,
        publishedDate: 'July 4, 2015',
        publisher: 'Carina Press',
        language: 'English',
        dimentions: '5.8 x 0.9 x 4.3 inches',
        summary:
          'In the follow-up to Abbi Gliness 1 New York Times bestseller Until Friday Night three teens from a small southern town are stuck in a dramatic love triangle. Willa cant erase the bad decisions of her past that led her down the path shes on now. But she can fight for forgiveness from her family',
      },
      {
        id: 23,
        title: 'Hold Her Again',
        author: 'Shannon Stacey',
        price: 11.59,
        coverImage: 'assets/images/books/23.jpg',
        pages: 222,
        publishedDate: 'October 4, 2017',
        publisher: 'Harlequin Audio',
        language: 'English',
        dimentions: '5.8 x 0.9 x 5.3 inches',
        summary:
          'After a near-fatal family catastrophe and an unexpected romantic upheaval, Adelaide Buchwald finds herself catapulted into a summer of wild possibility, during which she will fall in and out of love a thousand times--while finally confronting the secrets she keeps, her ideas about love, and the weird grandiosity of the .',
      },
      {
        id: 24,
        title: 'Intoxicated by You',
        author: 'Kristin Mayer',
        price: 4.99,
        coverImage: 'assets/images/books/24.jpg',
        pages: 112,
        publishedDate: 'March 24, 2018',
        publisher: 'Kristin Mayer',
        language: 'English',
        dimentions: '5.8 x 0.9 x 4.3 inches',
        summary:
          'Haunted by the tragic loss of a dear friend, Maya has sworn off alcohol, determined to honor her friends memory. Her world takes an unexpected turn when she crosses paths with Tom, a charming Irishman who owns a non-profit organization collaborating with Mayas marketing agency.',
      },
    ];
    this.saveBooksToLocal(allBooks);
    return allBooks;
  }
}
