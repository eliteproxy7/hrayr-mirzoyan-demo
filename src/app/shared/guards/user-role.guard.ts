import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { JwtAuthService } from "../services/auth/jwt-auth.service";

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private router: Router, private jwtAuth: JwtAuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var user = this.jwtAuth.getUser();

    if (
      user &&
      route.data &&
      route.data.roles &&
      route.data.roles.includes(user.role)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
