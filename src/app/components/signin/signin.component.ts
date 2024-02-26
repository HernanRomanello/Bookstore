import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent implements OnInit {
  constructor(private formbuilder: FormBuilder) {}

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: this.formbuilder.control('', Validators.required),
      password: this.formbuilder.control('', Validators.required),
    });
  }

  handleSubmit() {
    // Handle form submission logic here
    console.log('Form Submitted!');
  }
}
