import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Entity/user';
import { UsersComponent } from '../users/users.component';
@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent implements OnInit {
  postUser:FormGroup;
  user:UsersComponent;

  constructor(private router: Router,private userService:UserService,private fp:FormBuilder) {
  
   }

  ngOnInit(): void {
    this.postUser=this.fp.group({
      nom:[null,[Validators.required]],
      prenom:[null,[Validators.required]],
      address:[null,[Validators.required]],
      tel:[null,[Validators.required]],
      ville:[null,[Validators.required]],
      sexe:[null,[Validators.required]],

    dateNaissance:[null,[Validators.required]],
      email :[null,[Validators.required,Validators.email]],
     password:[null,[Validators.required]],
      role:[null,[Validators.required]]
    })
  }
  navigateToNewUrl(): void {
    this.user.getAllUsers;
   
    this.router.navigate(['users'], { replaceUrl: true });
   
    

  }
  addUser(){
    
    this.userService.addUsere(this.postUser.value).subscribe((res)=>{
      console.log(res);
     this.router.navigateByUrl("/users")
    })
   
    console.log(this.postUser.value);
   
  }
  onsbmit(){
    this.addUser();
    
    this.navigateToNewUrl();
   
   
  }

}
