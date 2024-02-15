import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  constructor(private httpClient: HttpClient, private router: ) { }

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
    if(decodedToken.roles.includes("Admin")) this.route
  }
}
