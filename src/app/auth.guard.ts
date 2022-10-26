import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { ApiAuthService } from './services/api-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private service: ApiAuthService) {}

  canActivate() {
    if (this.service.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
