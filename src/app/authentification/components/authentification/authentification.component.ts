import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';
import { LoginResponse } from 'src/app/Entity/login-response';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  loginFormGroup: FormGroup;
  submitted: boolean = false;
  errorMessage: string;

  constructor(private fb : FormBuilder, private authService: AuthentificationService) { }

  ngOnInit(): void
  {
    this.loginFormGroup = this.fb.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    })
  }

  onLogin()
  {
    this.submitted = true;
    if(this.loginFormGroup.invalid) return;
    this.authService.login(this.loginFormGroup.value).subscribe({
      next: loginResponse => {
        this.authService.saveToken(loginResponse);
        console.log(loginResponse);
      },

      error: err => {
        console.log(err);
        this.errorMessage = "An error occurred.";
      }
    })
  }

}
