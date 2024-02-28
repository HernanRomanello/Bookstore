import { Component, OnInit } from '@angular/core';
import { book } from '../../shared/models/book';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css',
})
export class BookPageComponent implements OnInit {
  book!: book;

  constructor() {}

  ngOnInit(): void {}
}
