import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '@core/service/auth.service';
import { USER_ROLE } from '@models/user.model';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const role = route.data.role;
    if (role === USER_ROLE.ADMIN && !this.auth.isAdmin) {
      this.router.navigate(['terminal']);
    } else if (role === USER_ROLE.TERMINAL && this.auth.isAdmin) {
      this.router.navigate(['admin']);
    }
    return true;
  }
}
