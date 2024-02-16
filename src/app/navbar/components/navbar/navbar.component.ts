import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggerUser } from 'src/app/Entity/logger-user';
import { AuthentificationService } from 'src/app/authentification/services/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  userSub:  Subscription;
  isAuthentication = false;
  isAdmin = false;
  isRespo = false;
  isTech = false;
  name: string;
  roles: string[];

  constructor(private authService: AuthentificationService) { }

  ngOnInit(): void
  {
    this.userSub = this.authService.user.subscribe(loggerUser => {
      this.isAuthentication = !!loggerUser;

      if(!this.isAuthentication)
      {
        this.initializeState();
      }else{
        this.setRole(loggerUser);
        this.name = loggerUser.username;
        this.roles = loggerUser.roles;
      }
    })
  }

  setRole(loggedUser:LoggerUser | null)
  {
    if(loggedUser?.roles.includes("Admin")) this.isAdmin = true;
    else if(loggedUser?.roles.includes("Responsable"))
    {
      this.isRespo = true;
    }else if(loggedUser?.roles.includes("Technicien"))
    {
      this.isTech = true;
    }
  }

  initializeState()
  {
    this.isAdmin = false;
    this.isRespo = false;
    this.isTech = false;
  }

  logout()
  {
    this.authService.logout();
  }

  ngOnDestroy(): void
  {
    this.userSub.unsubscribe();
  }
}
