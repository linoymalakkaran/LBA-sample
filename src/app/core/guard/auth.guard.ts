import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.auth.isTokenExpired) {
      // this.router.navigate(["/auth/login"], {
      //   queryParams: { returnUrl: state.url },
      // });
      //return false;
      //Temporary fix need to update
      return true;
    }
    return true;
  }
}
