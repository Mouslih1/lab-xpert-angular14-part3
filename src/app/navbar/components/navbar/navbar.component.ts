import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthentificationService } from 'src/app/authentification/services/authentification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userSub:  Subscription;
  isAuthentication = false;

  constructor(private authService: AuthentificationService) { }

  ngOnInit(): void
  {
    this.userSub = this.authService.user.subscribe(loggerUser => {
      this.isAuthentication = !!loggerUser;
    })
  }

  logout()
  {

  }
}
