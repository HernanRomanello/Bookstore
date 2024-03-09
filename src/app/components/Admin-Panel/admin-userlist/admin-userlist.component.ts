// import { Component, inject } from '@angular/core';
// import { UsersService } from '../../../services/user/users.service';
// import { AdminService } from '../../../services/admin/admin.service';

// @Component({
//   selector: 'app-admin-userlist',
//   templateUrl: './admin-userlist.component.html',
//   styleUrls: [
//     './admin-userlist.component.css',
//     '../../cart-page/cart-page.component.css',
//   ],
// })
// export class AdminUserlistComponent {
//   usersService = inject(UsersService);
//   adminService = inject(AdminService);
//   selectedDiscount = 15;
//   updateUserDiscount(userId: string): void {
//     this.adminService
//       .updateUserDiscount(userId, this.selectedDiscount)
//       .then(() => {
//         alert('Discount updated successfully');
//       });
//   }
// }
