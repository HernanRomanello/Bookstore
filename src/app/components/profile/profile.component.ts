import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  user: User | null = null;
  isEditing: boolean = false;
  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.user = this.authService.user;
  }

  editForm!: FormGroup;

  ngOnInit(): void {
    if (this.authService.user) {
      this.editForm = this.formBuilder.group({
        username: this.formBuilder.control(
          this.authService.user.username,
          Validators.required
        ),
        name: this.formBuilder.control(
          this.authService.user.name,
          Validators.required
        ),
        lastname: this.formBuilder.control(
          this.authService.user.lastName,
          Validators.required
        ),
        email: this.formBuilder.control(this.authService.user.email, [
          Validators.required,
          Validators.email,
        ]),
        age: this.formBuilder.control(this.authService.user.age),
        address: this.formBuilder.control(this.authService.user.address),
        phoneNumber: this.formBuilder.control(
          this.authService.user.phoneNumber
        ),
      });
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
    this.user = this.authService.user;
    alert('Changes saved successfully');
  }

  editProfile(): void {
    this.isEditing = !this.isEditing;
  }

  saveProfile(): void {
    // You can implement logic for saving the edited profile here
  }
}
