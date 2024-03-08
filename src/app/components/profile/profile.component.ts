import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnDestroy {
  isEditing: boolean = false;
  editForm!: FormGroup;
  userSub: Subscription | undefined;

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.userSub = this.authService.user.subscribe((user) => {
      if (user) {
        this.editForm = this.formBuilder.group({
          username: this.formBuilder.control(
            user.username,
            Validators.required
          ),
          name: this.formBuilder.control(user.name, Validators.required),
          lastname: this.formBuilder.control(
            user.lastName,
            Validators.required
          ),
          email: this.formBuilder.control(user.email, [
            Validators.required,
            Validators.email,
          ]),
          age: this.formBuilder.control(user.age),
          address: this.formBuilder.control(user.address),
          phoneNumber: this.formBuilder.control(user.phoneNumber),
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }

  saveChanges() {
    const username: string = this.editForm.get('username')?.value;
    const name: string = this.editForm.get('name')?.value;
    const lastName: string = this.editForm.get('lastname')?.value;
    const email: string = this.editForm.get('email')?.value;
    const age: number = this.editForm.get('age')?.value;
    const address: string = this.editForm.get('address')?.value;
    const phoneNumber: string = this.editForm.get('phoneNumber')?.value;

    this.authService.updateUser({
      username,
      name,
      lastName,
      email,
      age,
      address,
      phoneNumber,
    });
    this.isEditing = !this.isEditing;

    alert('Changes saved successfully');
  }

  editProfile(): void {
    this.isEditing = !this.isEditing;
  }

  deleteMyProfile(user: User) {
    this.authService.deleteUser(user);
  }
}
