import { Component } from '@angular/core';

@Component({
  selector: 'app-update-users-discount',
  templateUrl: './update-users-discount.component.html',
  styleUrl: './update-users-discount.component.css',
})
export class UpdateUsersDiscountComponent {
  discount: number = 0.2;
  constructor() {}
  updateDiscount() {
    console.log(this.discount);
  }
  saveDiscount() {}
}
