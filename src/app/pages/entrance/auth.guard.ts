import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../../services/login/auth.service";
import {UpdateAuthService} from "../../services/login/update-auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private route: Router,
              private updateAuthService: UpdateAuthService) {}
  canActivate() {
    this.authService.authorize().subscribe(
      data => {
        if (!data.auth) {
          this.route.navigate(['/login']);
        }
      }
    )
    return true;
  }
}
