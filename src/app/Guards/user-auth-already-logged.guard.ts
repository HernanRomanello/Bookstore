import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { filter, first, map, take } from 'rxjs';

export const userAuthAlreadyLoggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.user.pipe(
    filter((user) => user !== undefined), // Ensure the subscription is automatically unsubscribed after the first emission
    first(), // Ensure the subscription is automatically unsubscribed after the first emission
    map((user) => {
      if (user) {
        router.navigate(['/']);
        return false;
      }
      return true;
    })
  );
};
