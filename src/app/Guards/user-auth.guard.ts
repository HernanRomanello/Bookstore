import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const userAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.user) {
    router.navigate(['/signin']);
    alert('You must be logged in to access this page');
    return false;
  }
  return true;
};
