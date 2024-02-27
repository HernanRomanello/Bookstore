import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(public authService: AuthService, private router: Router) {}

  mainWebPic = 'assets/images/web-images/4.jpg';

  ngOnInit(): void {}

  navugateTo(path: string) {
    this.router.navigate([path]);
  }
}
