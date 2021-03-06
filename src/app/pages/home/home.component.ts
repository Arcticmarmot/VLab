import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/login/auth.service';
import {UserAuthInfo, UserInfo} from '../../constants/type';
import {UpdateAuthService} from '../../services/login/update-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  userAuthInfo: UserAuthInfo = {auth: false, role: 'student'};
  isIntro = true;
  constructor(private authService: AuthService,
              private updateAuthService: UpdateAuthService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.updateAuth();
    this.updateAuthService.authUpdate$.subscribe(
      _ => {
        this.updateAuth();
      }
    );
  }
  updateAuth() {
    this.authService.authorize().subscribe(
      (res: {auth: boolean, role: 'student' | 'teacher'}) => {
        this.userAuthInfo = res;
      }
    );
  }
  start() {
    if (!this.userAuthInfo.auth) {
      this.route.navigate(['/login']);
    } else {
      this.route.navigate(['/entrance']);
    }
  }

  changeIsIntroToTrue() {
    this.isIntro = true;
  }
  changeIsIntroToFalse() {
    this.isIntro = false;
  }
}

