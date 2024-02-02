import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url="http://localhost:8081/api/v1//users";

  constructor(private http:HttpClient) { }
  addUsere(User:User):Observable<any>{
    return this.http.post("http://localhost:8081/api/v1/users/add",User)
  }


  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>("http://localhost:8081/api/v1//users");
  } 
  getUserById(id:number):Observable<any>{
    return  this.http.get("http://localhost:8081/api/v1/users/"+id);
  }
  getUpdate(id:number,user:any):Observable<any>{
    return  this.http.put("http://localhost:8081/api/v1/users/"+id+"/update",user);
  }
  deleteUser(id:number):Observable<any>{
    return this.http.delete("http://localhost:8081/api/v1/users/"+id+"/delete")
  }
} 
