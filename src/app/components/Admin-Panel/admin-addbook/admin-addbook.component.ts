import { Component, inject } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Book } from '../../../shared/models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-addbook',
  templateUrl: './admin-addbook.component.html',
  styleUrl: './admin-addbook.component.css',
  providers: [FormBuilder],
})
export class AdminAddbookComponent {
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  adminService = inject(AdminService);

  addBookForm = this.formBuilder.group({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    coverImage: new FormControl<File | null>(null, [Validators.required]),
    pages: new FormControl(0, [Validators.required]),
    publishedDate: new FormControl('', [Validators.required]),
    publisher: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    dimentions: new FormControl('', [Validators.required]),
    summary: new FormControl('', [Validators.required]),
  });
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.addBookForm.patchValue({
      coverImage: file,
    });
  }

  onSubmit(): void {
    if (this.addBookForm.invalid)
      return alert('Invalid form, please check the fields');
    const book: Book = {
      id: '',
      title: this.addBookForm.value.title!,
      author: this.addBookForm.value.author!,
      price: this.addBookForm.value.price!,
      pages: this.addBookForm.value.pages!,
      publishedDate: this.addBookForm.value.publishedDate!,
      publisher: this.addBookForm.value.publisher!,
      language: this.addBookForm.value.language!,
      dimentions: this.addBookForm.value.dimentions!,
      summary: this.addBookForm.value.summary!,
      tags: [],
      description: '',
      rating: 0,
      stars: 0,
      imageUrl: '',
    };
    this.adminService
      .addBook(book, this.addBookForm.value.coverImage)
      .then(() => {
        alert('Book added successfully');
        this.router.navigate(['/admin']);
      });
  }
}
