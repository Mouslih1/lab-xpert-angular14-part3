import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Reactif} from "../../Entity/Reactif";

@Injectable({
  providedIn: 'root'
})
export class ReactifService {

  private baseURL = "http://localhost:8081/api/v1/reactifs";

  constructor(private httpClient: HttpClient) { }

  getReactifsList(): Observable<Reactif[]>
  {
    return this.httpClient.get<Reactif[]>(this.baseURL);
  }

  saveReactif(reactif: Reactif): Observable<Reactif>
  {
    return this.httpClient.post<Reactif>(this.baseURL + '/add', reactif);
  }

  updateReactif(id: number, reactif: Reactif): Observable<Object>
  {
    return this.httpClient.put(this.baseURL + '/' + id + '/update', reactif);
  }

  getReactifById(id: number): Observable<Reactif>
  {
    return this.httpClient.get<Reactif>(this.baseURL + '/' + id);
  }

  deleteReactif(id: number): Observable<Object>
  {
    return this.httpClient.delete(this.baseURL + '/' + id + '/delete');
  }
}
