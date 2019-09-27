import { Injectable } from '@angular/core';
import { userModel } from './user.model';

@Injectable({ providedIn: 'root' })
export class USerAuthService {

    constructor() { }
    currentUser: userModel;

    loginUser(userName: string, password: string) {
        console.log(userName);
        this.currentUser = {
            id: 2,
            lastName: 'Nazeh',
            firstName: 'Abel',
            userName: 'Nazehs',
        }
        this.isAuthenticated();
    }

    isAuthenticated() {
        console.log(!!this.currentUser);

        return !!this.currentUser;
    }

    updateCurrentUser(lastName: string, firstName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}