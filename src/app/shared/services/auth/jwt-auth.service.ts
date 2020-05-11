import { Injectable } from "@angular/core";
import { LocalStoreService } from "../local-store.service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { map, catchError } from "rxjs/operators";
import { User } from "../../models/user.model";
import { of, BehaviorSubject, throwError } from "rxjs";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class JwtAuthService {
  token;
  isAuthenticated: Boolean;
  user: User;
  user$ = new BehaviorSubject<User>(this.user);
  signingIn: Boolean;
  JWT_TOKEN = "JWT_TOKEN";
  APP_USER = "hrayrDemo_USER";

  constructor(
    private ls: LocalStoreService,
    private http: HttpClient,
    private router: Router
  ) {}

  public signin(username, password) {
    this.signingIn = true;
    return this.http
      .post(`${environment.apiURL}/users/authenticate`, { username, password })
      .pipe(
        map((res: any) => {
          this.setUserAndToken(res.token, res, !!res);
          this.signingIn = false;
          return res;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public signup(form) {
    return this.http.post(`${environment.apiURL}/users/register`, form);
  }

  public checkTokenIsValid() {
    return of(this.getUser()).pipe(
      map((profile: User) => {
        this.setUserAndToken(this.getJwtToken(), profile, true);
        this.signingIn = false;
        return profile;
      }),
      catchError((error) => {
        return of(error);
      })
    );
  }

  public signout() {
    this.setUserAndToken(null, null, false);
    window.location.href="/";
    
   
  }

  isLoggedIn(): Boolean {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return this.ls.getItem(this.JWT_TOKEN);
  }
  getUser() {
    return this.ls.getItem(this.APP_USER);
  }

  setUserAndToken(token: String, user: User, isAuthenticated: Boolean) {
    this.isAuthenticated = isAuthenticated;
    this.token = token;
    this.user = user;
    this.user$.next(user);
    
    if(token==null){
      this.ls.clear();
    }else{
      this.ls.setItem(this.JWT_TOKEN, token);
    this.ls.setItem(this.APP_USER, user);
    }
  }
}
