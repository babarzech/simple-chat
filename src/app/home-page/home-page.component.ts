import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from '../helpers/auth';
import { UserInfo, UserService } from '../helpers/user';
import { FirebaseService } from '../services/firebase.service';
declare var $: any;
export interface MessageModal {
  userName?: string;
  message?: string;
  time?: string;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public authState;
  public userInfo: UserInfo;
  public messageSent = false;
  constructor(public active: ActivatedRoute, public user: UserService, public firebaseService: FirebaseService) {
    // this.user.initUser(res => {
    //   // console.log(res)
    //   this.userInfo = res;
    // });
  }
  sendMessage() {
       const message: MessageModal = {};
       message.message = $('#the-textarea').val();
       message.userName = this.active.snapshot.queryParams.id ? this.active.snapshot.queryParams.id : 'babar';
       message.time = new Date().toString();
       this.messageSent = true;
       this.firebaseService.createUser(message)
       .then(
         res => {
          $('#the-textarea').val('');
          setTimeout(() => {
            this.messageSent = false;
          }, 5000);
          //  this.resetFields();
          //  this.router.navigate(['/home']);
         }
       );
    
  }
  ngOnInit() {
    console.log(this.active.snapshot.queryParams.id,'query params');
    $('textarea').keyup(function() {

      // tslint:disable-next-line: one-variable-per-declaration
      const characterCount = $(this).val().length,
        current = $('#current'),
        maximum = $('#maximum'),
        theCount = $('#the-count');
      current.text(characterCount);


      /*This isn't entirely necessary, just playin around*/
      if (characterCount < 70) {
        current.css('color', '#666');
      }
      if (characterCount > 70 && characterCount < 90) {
        current.css('color', '#6d5555');
      }
      if (characterCount > 90 && characterCount < 100) {
        current.css('color', '#793535');
      }
      if (characterCount > 100 && characterCount < 120) {
        current.css('color', '#841c1c');
      }
      if (characterCount > 120 && characterCount < 139) {
        current.css('color', '#8f0001');
      }

      if (characterCount >= 140) {
        maximum.css('color', '#8f0001');
        current.css('color', '#8f0001');
        theCount.css('font-weight', 'bold');
      } else {
        maximum.css('color', '#666');
        theCount.css('font-weight', 'normal');
      }


    });
  }


}
