import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  SESSION_IUSER = 'SESSION_LBAUSER';

  constructor(
    private http: HttpClient,
    private router: Router,
   ) { }

    getUser() {
        const localUserSession = (localStorage.getItem(this.SESSION_IUSER) || null) as any;
        const user = JSON.parse(localUserSession);
        return user;
    }

    createSession(user: any) {
        localStorage.setItem(this.SESSION_IUSER, JSON.stringify(user));
        return user;
    }

    lockUser() {
        let user: IUser = this.getUser();
        user = { ...user, loggedIn: false };
        this.createSession(user);
        return user;
    }

    logout() {
        localStorage.removeItem(this.SESSION_IUSER);
        this.router.navigate(['/login']);
    }

}
