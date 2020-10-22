import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

export interface UserInfo {
    //  {
    id?: string;
    displayName?: string;
    email: string;
    phoneNumber: string;
    photoURL: string;
    //   }
}
@Injectable({
    providedIn: 'root'
})
export class UserService {
    public userInfo: UserInfo;
    public authState: any;
    public refFirebaseAuth: AngularFireAuth;
    public initUser(callback?) {
        if (this.userData() === undefined) {
            this.refFirebaseAuth.authState.subscribe(authState => {
                this.authState = authState;
                this.userInfo = this.userData();
                console.log('init user called');
                callback(this.userInfo);
            });
        } else {
          callback(this.userInfo);
        }
    }
    userData(): UserInfo {
        if (!this.isAuthenticated) {
            return undefined;
        } else {
            if (this.authState === undefined){
                setTimeout(() => {
                    this.userData();
                }, 200);
                return;
            }
            const userData = {
                id: this.authState.uid,
                displayName: this.authState.displayName,
                email: this.authState.email,
                phoneNumber: this.authState.phoneNumber,
                photoURL: this.authState.photoURL,
            };
            return userData;
        }
        // return [

        // ];
    }
    get currentUserId(): string {
        return this.isAuthenticated ? this.authState.uid : null;
    }
    get isEmailVerified(): boolean {
        return this.isAuthenticated ? this.authState.emailVerified : false;
    }
    get isAuthenticated(): boolean {
        return this.authState !== null;
    }
}
