import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthService } from './helpers/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePageComponent } from './home-page/home-page.component';
import { UserService } from './helpers/user';
import { AccountComponent } from './account/account.component';
import { InboxComponent } from './inbox/inbox.component';
import { GetOpinionComponent } from './get-opinion/get-opinion.component';
import { HeaderComponent } from './header/header.component';
import { FoooterComponent } from './foooter/foooter.component';
// import { User } from './helpers/user';


@NgModule({
  declarations: [
    AppComponent,
    AvatarDialogComponent,
    EditUserComponent,
    NewUserComponent,
    HomeComponent,
    UserLoginComponent,
    HomePageComponent,
    AccountComponent,
    InboxComponent,
    GetOpinionComponent,
    HeaderComponent,
    FoooterComponent
  ],
  entryComponents: [AvatarDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
  ],
  providers: [FirebaseService, EditUserResolver, AuthService, AngularFireAuth, UserService ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
