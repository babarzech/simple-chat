import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AuthService } from './helpers/auth';
import { UserService } from './helpers/user';
// import { User } from './helpers/user';
// import { AuthService } from '../helpers/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public user: UserService, public authService: AuthService, private firebaseAuth: AngularFireAuth) {
    this.user.refFirebaseAuth = firebaseAuth;
  }
  title = 'angular-firebase-crud';
}
