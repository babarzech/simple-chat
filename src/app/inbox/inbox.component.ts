import { Component, OnInit } from '@angular/core';
import { UserInfo, UserService } from '../helpers/user';
import { FirebaseService } from '../services/firebase.service';
declare var $: any;
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  public items;
  constructor(public user: UserService, public firebaseService: FirebaseService) { }

  ngOnInit() {
    // searchByName(){
      const value = this.user.userInfo.id;
      this.firebaseService.searchUsers(value)
      .subscribe(result => {
        this.items = result;
        // this.name_filtered_items = result;
        // this.items = this.combineLists(result, this.age_filtered_items);
      })
    // }
    // this.firebaseService.getUsers().subscribe(result => {
    //   this.items = result;
    //   console.log(result);
    // });
    $(document).ready(function () {
      $('#action_menu_btn').click(function () {
        $('.action_menu').toggle();
      });
    });
  }
  converTime(time) {
    const date = new Date(time);
    if (isNaN(date.getTime())) {
      return '';
    } else {
      const newDate = date.toLocaleString();
      return newDate;
    }
  }
}
