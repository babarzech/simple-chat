import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AuthService } from '../helpers/auth';
import { UserInfo, UserService } from '../helpers/user';

declare var $: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public authState;
  public userInfo: UserInfo;
  constructor(public user: UserService) {
    // this.user.initUser(res => {
    //   // console.log(res)
    //   this.userInfo = res;
    // });
  }
  ngOnInit() {
  }


}
