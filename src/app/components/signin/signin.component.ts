import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css', '../signup/signup.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private formbuilder: FormBuilder
  ) {}

  loginForm!: FormGroup;
  discount: number = 0.8;

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: this.formbuilder.control('', Validators.required),
      password: this.formbuilder.control('', Validators.required),
    });
  }

  async handleSubmit() {
    // Handle form submission logic here
    const email: string = this.loginForm.get('email')?.value;
    const password: string = this.loginForm.get('password')?.value;

    const loggedIn = await this.authService.login(email, password);
    if (loggedIn) {
      this.router.navigate(['/']);
    }
  }
}
