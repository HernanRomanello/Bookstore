import { Component, inject } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service';
import { BooksService } from '../../../services/books/books.service';

@Component({
  selector: 'app-admin-booklist',
  templateUrl: './admin-booklist.component.html',
  styleUrls: [
    './admin-booklist.component.css',
    '../../cart-page/cart-page.component.css',
  ],
})
export class AdminBooklistComponent {
  adminService = inject(AdminService);
  booksService = inject(BooksService);
}
