import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Validator from 'validator';
import { AuthService } from '../../services/auth.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private formbuilder: FormBuilder
  ) {}

  signupForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      name: this.formbuilder.control('', Validators.required),
      lastname: this.formbuilder.control('', Validators.required),
      username: this.formbuilder.control('', Validators.required),
      password: this.formbuilder.control('', [
        Validators.required,
        this.passwordValidator,
      ]),
      email: this.formbuilder.control('', [
        Validators.required,
        Validators.email,
      ]),
    });

    // this.route.data.subscribe((data) => {
    //   console.log(data);
    // });
  }
  passwordValidator(control: AbstractControl): Validators | null {
    const password: string = control.value;

    if (!password) {
      return { passwordError: 'Please enter a password' };
    }

    return Validator.isStrongPassword(password)
      ? null
      : { passwordError: 'Password is not strong enough' };
  }

  handleSubmit() {
    const email: string = this.signupForm.get('email')?.value;
    const password: string = this.signupForm.get('password')?.value;
    const username: string = this.signupForm.get('username')?.value;
    const name: string = this.signupForm.get('name')?.value;
    const lastName: string = this.signupForm.get('lastname')?.value;

    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      password,
      username,
      name,
      lastName,
    };
    if (this.authService.register(user)) {
      this.router.navigate(['/signin']);
    }
  }
}
