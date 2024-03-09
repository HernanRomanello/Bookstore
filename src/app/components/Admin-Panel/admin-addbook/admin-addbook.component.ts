import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { book } from '../../../shared/models/book';
import { BooksService } from '../../../services/books/books.service';

@Component({
  selector: 'app-admin-addbook',
  templateUrl: './admin-addbook.component.html',
  styleUrl: './admin-addbook.component.css',
  providers: [FormBuilder],
})
export class AdminAddbookComponent {
  addBookForm = this.formBuilder.group({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    coverImage: new FormControl('', [Validators.required]),
    pages: new FormControl(0, [Validators.required]),
    publishedDate: new FormControl('', [Validators.required]),
    publisher: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    dimentions: new FormControl('', [Validators.required]),
    summary: new FormControl('', [Validators.required]),
  });
  edittingbook: book | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BooksService
  ) {
    const bookIdFromPathState = this.route.snapshot.paramMap.get('id');

    if (bookIdFromPathState && +bookIdFromPathState !== -1) {
      const bookFromStore = this.bookService.getBookById(+bookIdFromPathState);
      this.edittingbook = bookFromStore;
      this.addBookForm.patchValue(bookFromStore);
    }
  }

  onSubmit(): void {
    if (this.addBookForm.invalid)
      return alert('Invalid form, please check the fields');
    const allBooks = this.bookService.getAllBooks();
    const maxId = allBooks.reduce(
      (max, book) => (book.id > max ? book.id : max),
      0
    );
    const book: book = {
      id: this.edittingbook?.id || maxId + 1,
      title: this.addBookForm.value.title!,
      author: this.addBookForm.value.author!,
      price: this.addBookForm.value.price!,
      pages: this.addBookForm.value.pages!,
      publishedDate: this.addBookForm.value.publishedDate!,
      publisher: this.addBookForm.value.publisher!,
      language: this.addBookForm.value.language!,
      dimentions: this.addBookForm.value.dimentions!,
      summary: this.addBookForm.value.summary!,
      coverImage: this.addBookForm.value.coverImage!,
      tags: [],
      description: '',
      rating: 0,
      stars: 0,
      imageUrl: '',
    };
    if (this.edittingbook) {
      this.bookService.updateBook(this.edittingbook.id, book);
      alert('Book updated successfully');
      this.router.navigate(['/admin']);
      return;
    } else {
      this.bookService.insertBook(book);
      alert('Book added successfully');
      this.router.navigate(['/admin']);
    }
  }
}
