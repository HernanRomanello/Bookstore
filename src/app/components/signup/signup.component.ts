import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Validator from 'validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(
    private route: ActivatedRoute,
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
    // onst username: string = this.signupForm.get('username')?.value;
    // const password: string = this.signupForm.get('password')?.value;
    // this.authservice
    //   .login({ username, password })
    //   .subscribe((response: any): void => {
    //     console.log(response);
    //   });
  }
}
