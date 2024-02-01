import { Injectable } from '@angular/core';
import {Fournisseur} from "../../Entity/Fournisseur";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private baseURL = "http://localhost:8081/api/v1/fournisseurs";

  constructor(private httpClient: HttpClient) { }

  getFournisseursList(): Observable<Fournisseur[]> {
    return this.httpClient.get<Fournisseur[]>(this.baseURL);
  }

  saveFournisseur(fournisseur: Fournisseur): Observable<Fournisseur>{
    return this.httpClient.post<Fournisseur>(this.baseURL + '/add', fournisseur);
  }

  updateFournisseur(id: number, fournisseur: Fournisseur): Observable<Object>{
    return this.httpClient.put(this.baseURL + '/' + id +'/update', fournisseur);
  }

  getFournisseurById(id: number): Observable<Fournisseur>{
    return this.httpClient.get<Fournisseur>(this.baseURL + '/' + id);
  }

  deleteFournisseur(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL + '/' + id + '/delete');
  }
}
