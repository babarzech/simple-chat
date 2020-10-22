import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from '../helpers/auth';
import { UserService } from '../helpers/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  public authState;
  constructor(public user: UserService, public router: Router, public userService: UserService,
    public authService: AuthService, private firebaseAuth: AngularFireAuth) {
    // this.user.refFirebaseAuth = firebaseAuth;
    this.userService.initUser(res => {
      // console.log(res);
      if(res !== undefined){
        this.router.navigate(['/home-page']);
      }
    });
    // console.log();
    // if (this.userService.initUser() !== undefined) {
    //   this.router.navigate(['/home']);
    // }
  }

  ngOnInit() {
  }

}
