import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder
  ) {}

  editForm!: FormGroup;

  ngOnInit(): void {
    if (this.authService.user) {
      this.editForm = this.formBuilder.group({
        password: this.formBuilder.control(
          this.authService.user.password,
          Validators.required
        ),
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
      });
    }
  }

  saveChanges() {
    const password: string = this.editForm.get('password')?.value;
    const username: string = this.editForm.get('username')?.value;
    const name: string = this.editForm.get('name')?.value;
    const lastName: string = this.editForm.get('lastname')?.value;
    this.authService.updateUser({
      password,
      username,
      name,
      lastName,
    });
    alert('Changes saved successfully');
  }
}
