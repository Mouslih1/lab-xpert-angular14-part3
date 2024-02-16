import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from './authentification/services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  title = 'lab-xpert-angular14-for-part2';
  isClicked = false;

  constructor(private authService: AuthentificationService){}

  changeColor() {
    this.isClicked = !this.isClicked;
  }

  ngOnInit(): void
  {
    this.authService.autoLogin();
  }
}
