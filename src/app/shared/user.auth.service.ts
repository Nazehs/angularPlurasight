import { Injectable } from '@angular/core';
import { userModel } from './user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { eventsModel } from './event.model';


@Injectable({ providedIn: 'root' })
export class USerAuthService {

    constructor(private http: HttpClient) { }
    currentUser: userModel;

    loginUser(userName: string, password: string) {
        console.log(userName);
        let options = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
        let loginInfo = { username: userName, password: password }
        return this.http.post('api/login', loginInfo, options).pipe(tap(data => {
            this.currentUser = <userModel>data['user']
        })).pipe(catchError(error => { return of(false) }))

        // this.currentUser = {
        //     id: 2,
        //     lastName: 'Nazeh',
        //     firstName: 'Abel',
        //     userName: 'Nazehs',
        // }
        // this.isAuthenticated();
    }

    isAuthenticated() {
        // console.log(!!this.currentUser);

        return !!this.currentUser;
    }

    checkAuthenticationStatus = () => {
        return this.http.get('/api/currentIdentity').pipe(tap(data => {
            console.log('data:', data)
            if (data instanceof Object) {
                this.currentUser = <userModel>data;
            } else {
                return;
            }
        }))

    }

    updateCurrentUser(lastName: string, firstName: string) {
        let options = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options)
    }

    logout = () => {
        this.currentUser = undefined;
        let options = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
        return this.http.post('/api/logout', {}, options)
    }
}