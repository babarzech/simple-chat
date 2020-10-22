import { UserInfo } from './../helpers/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../helpers/user';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public userInfo: UserInfo;
  constructor(public user: UserService, public firebaseService: FirebaseService) {
    this.user.initUser(res => {
      // console.log(res)
      this.userInfo = res;
    });
   }
    
  ngOnInit() {
  }

}
