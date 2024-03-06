import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-update-users-discount',
  templateUrl: './update-users-discount.component.html',
  styleUrl: './update-users-discount.component.css',
})
export class UpdateUsersDiscountComponent {
  discount: number = 0.2;
  discountRateEditable: boolean = false;
  constructor(private authService: AuthService) {}
  updateDiscount() {
    this.discountRateEditable = !this.discountRateEditable;
  }
  saveDiscount(discountRate: number) {
    localStorage.setItem('discount', discountRate.toString());
    this.discountRateEditable = !this.discountRateEditable;
  }

  updateDiscountRate(discountRate: number) {
    this.discount = discountRate;
    this.authService.updateUser({});
  }
}
