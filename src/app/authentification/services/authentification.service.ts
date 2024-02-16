import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoggerUser } from 'src/app/Entity/logger-user';
import { LoginRequest } from 'src/app/Entity/login-request';
import { LoginResponse } from 'src/app/Entity/login-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private baseURL = 'http://localhost:8081';
  jwtHelperService = new JwtHelperService();
  user = new BehaviorSubject<LoggerUser | null>(null);
  tokenExpirationTimer: any;

  constructor(private httpClient: HttpClient, private router: Router) { }

  public login(user: LoginRequest) : Observable<LoginResponse>
  {
    const formData = new FormData();
    formData.append("username", user.username);
    formData.append("password", user.password);

    return this.httpClient.post<LoginResponse>(this.baseURL + "/login", formData);
  }

  saveToken(jwtToken : LoginResponse)
  {
    const decodedAccessToken = this.jwtHelperService.decodeToken(jwtToken.accessToken);
    const loggedUser = new LoggerUser(decodedAccessToken.sub, decodedAccessToken.roles, jwtToken.accessToken, this.getExpirationDate(decodedAccessToken.exp));
    this.user.next(loggedUser);
    this.autoLogout(this.getExpirationDate(decodedAccessToken.exp).valueOf() - new Date().valueOf());
    localStorage.setItem('userData', JSON.stringify(loggedUser));
    this.redirectLoggedInUser(decodedAccessToken, jwtToken.accessToken);
  }

  getExpirationDate(exp : number)
  {
    const date = new Date(0);
    date.setUTCSeconds(exp);

    return date;
  }

  redirectLoggedInUser(decodedToken: any, accessToken:string)
  {
    if(decodedToken.roles.includes("Admin") || decodedToken.roles.includes("Responsable")) this.router.navigateByUrl("admin/dashboard");
    else if(decodedToken.roles.includes("Technicien"))
    {
      this.router.navigateByUrl("admin/patients")
    }
  }

  logout()
  {
    localStorage.clear();
    this.user.next(null);
    this.router.navigate(['/']);

    if(this.tokenExpirationTimer)
    {
      clearTimeout(this.tokenExpirationTimer);
    }

    this.tokenExpirationTimer = null;
  }

  autoLogin()
  {
    const userData: {
      username: string,
      roles: string[],
      _token: string,
      _expiration: Date
    } = JSON.parse(localStorage.getItem('userData'));

    if(!userData) return;

    const loadedUser = new LoggerUser(userData.username, userData.roles, userData._token, new Date(userData._expiration));

    if(loadedUser.token)
    {
      this.user.next(loadedUser);
      this.autoLogout(loadedUser._expiration.valueOf() - new Date().valueOf())
    }
  }

  autoLogout(expirationDuration : number)
  {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }
}
