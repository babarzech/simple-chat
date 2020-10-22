import { GetOpinionComponent } from './get-opinion/get-opinion.component';
import { InboxComponent } from './inbox/inbox.component';
import { AccountComponent } from './account/account.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomePageComponent } from './home-page/home-page.component';

export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'account', component: AccountComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'get-opinion', component: GetOpinionComponent },
  { path: 'home-page', component: HomePageComponent },
  
  { path: 'details/:id', component: EditUserComponent, resolve:{data : EditUserResolver} }
];
