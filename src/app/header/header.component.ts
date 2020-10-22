import { Component, OnInit } from '@angular/core';
import { UserInfo, UserService } from '../helpers/user';
import { AuthService } from '../helpers/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public authState;
  public userInfo: UserInfo;
  constructor(public user: UserService, public authService: AuthService) {
    this.user.initUser(res => {
      // console.log(res)
      this.userInfo = res;
    });
  }
  ngOnInit() {
  }
  logOut() {
    // console.log('logout clicked');
    this.authService.SignOut();
  }
}
