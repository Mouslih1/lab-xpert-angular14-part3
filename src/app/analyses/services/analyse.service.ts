import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Analyse } from 'src/app/Entity/analyse';

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  constructor(private http:HttpClient) { }
  addAnalyse(Analyse:Analyse):Observable<any>{
    return this.http.post("http://localhost:8081/api/v1/analyses/add",Analyse)
  }


  getAllAnalyses():Observable<Analyse[]>{
    return this.http.get<Analyse[]>("http://localhost:8081/api/v1//analyses");
  } 
  getAnalysById(id:number):Observable<any>{
    return  this.http.get("http://localhost:8081/api/v1/analyses/"+id);
  }
  UpdateAnalyse(id:number,analyse:any):Observable<any>{
    return  this.http.put("http://localhost:8081/api/v1/analyses/"+id+"/update",analyse);
  }
  deleteAnalyse(id:number):Observable<any>{
    return this.http.delete("http://localhost:8081/api/v1/analyses/"+id+"/delete")
  }
}
