import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable, filter, first, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.user.pipe(
    filter((user) => user !== undefined), // Ensure the subscription is automatically unsubscribed after the first emission
    first(), // Ensure the subscription is automatically unsubscribed after the first emission
    map((user) => {
      if (!user || !user.isAdmin) {
        router.navigate(['/']);
        return false;
      }
      return true;
    })
  );
};

// Observable
