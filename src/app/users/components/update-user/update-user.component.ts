import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id:number=this.activateroute.snapshot.params["id"];
  updateForm:FormGroup;
  

  constructor(private router: Router,private activateroute:ActivatedRoute, private service :UserService,private fb:FormBuilder) { }

  ngOnInit(): void {
    
    this.updateForm=this.fb.group({
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
    this.getUserById()
    
  }
  navigate(): void {
    this.router.navigate(['users'], { replaceUrl: false});
    console.log("raja");
   
    

  }
  getUserById(){
      this.service.getUserById(this.id).subscribe((res)=>{
        console.log(res)
        this.updateForm.patchValue(res);
      })
  }
  updateUser(){
    this.service.getUpdate(this.id,this.updateForm.value).subscribe((res)=>{
      console.log(res);
      this.navigate()
    })
  }
  onsbmit(){
    this.updateUser();
    
  }

}
