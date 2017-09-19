import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './service/auth.service';

@Injectable()
export class AuthenticateGuard implements CanActivate {
  constructor(private authService: AuthService){ }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log("You are not loggedin", this.authService.isLoggedIn)
    return this.authService.isLoggedIn;
  }
}
