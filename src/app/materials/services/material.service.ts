import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Material } from "../../Entity/Material";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private baseURL = "http://localhost:8081/api/v1/materials";
  constructor( private httpClient: HttpClient ) { }
  /*getMaterialsList() {
    return this.httpClient.get<Material[]>(this.baseURL);
  }*/
  getMaterialsList(): Observable<Material[]> {
    return this.httpClient.get<Material[]>(`${this.baseURL}`);
  }
  saveMaterial(material: Material): Observable<Material>{
    return this.httpClient.post<Material>(this.baseURL + '/add', material);
  }
  updateMaterial(id: number, material: Material): Observable<Object> {
    return this.httpClient.put(this.baseURL + '/' + id + '/update', material);
  }
  getMaterialById(id: number): Observable<Material> {
    return this.httpClient.get<Material>(this.baseURL + '/' + id);
  }

  deleteMaterial(id: number): Observable<Object> {
    return this.httpClient.delete(this.baseURL + '/' + id + '/delete');
  }
}
