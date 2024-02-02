import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/Entity/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users :User[];

  constructor(private userservice:UserService,private route:Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.userservice.getAllUsers().subscribe((res)=>{
     
      this.users=res;
      console.log(res);
    })
  }
  deleteUser(id:number){
    this.userservice.deleteUser(id).subscribe((res)=>{
      console.log(res);
      console.log(id + "raja");
      this.getAllUsers();
    })
  }
  

}
