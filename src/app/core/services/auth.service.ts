import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { IUser } from "../models/IUser";
import * as moment from "moment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  SESSION_IUSER = "SESSION_LBAUSER";
  private expiresAt: any;

  constructor(private http: HttpClient, private router: Router) {}

  public get isTokenExpired(): boolean {
    return !this.expiresAt || this.expiresAt.isBefore(moment());
  }

  getUser() {
    const localUserSession = (localStorage.getItem(this.SESSION_IUSER) ||
      null) as any;
    const user = JSON.parse(localUserSession);

    //temporary fix, need to take from token
    let expiry: Date = new Date();
    let expiresBuffer = expiry.getMinutes() + 20;
    localStorage.setItem("expiresAt", expiresBuffer.toString());
    const expiresAt = localStorage.getItem("expiresAt");
    this.expiresAt = expiresAt && moment(new Date(expiresAt), "second");
    return user;
  }

  validateAndUpdateExpiry(){
    let expiry: Date = new Date();
    let expiresBuffer = expiry.getMinutes() + 20;
    localStorage.setItem("expiresAt", expiresBuffer.toString());
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
    this.router.navigate(["/login"]);
  }
}
