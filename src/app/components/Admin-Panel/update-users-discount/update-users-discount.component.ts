import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Database, get, ref, set } from '@angular/fire/database';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-update-users-discount',
  templateUrl: './update-users-discount.component.html',
  styleUrl: './update-users-discount.component.css',
})
export class UpdateUsersDiscountComponent {
  discount: number = 0.2;
  discountRateEditable: boolean = false;
  constructor(private authService: AuthService, private database: Database) {}

  updateDiscount() {
    this.discountRateEditable = !this.discountRateEditable;
  }

  async saveDiscount(discountRate: number) {
    try {
      const usersRef = ref(this.database, 'users');
      const users: { [id: string]: User } = (await get(usersRef)).val();
      for (const user in users) {
        users[user].priceDiscount = discountRate;
      }
      await set(usersRef, users);
      this.discountRateEditable = !this.discountRateEditable;
    } catch (error) {
      console.error(error);
    }
  }

  updateDiscountRate(discountRate: number) {
    this.discount = discountRate;
  }
}
