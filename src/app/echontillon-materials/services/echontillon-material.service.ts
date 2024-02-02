import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EchontillonMaterial } from 'src/app/Entity/echontillon-material';

@Injectable({
  providedIn: 'root'
})
export class EchontillonMaterialService {

  private baseURL = 'http://localhost:8081/api/v1/echontillons_materials';

  constructor(private httpClient: HttpClient) { }

  getEchontillonMaterials(): Observable<EchontillonMaterial[]>
  {
    return this.httpClient.get<EchontillonMaterial[]>(this.baseURL);
  }

  getEchontillonMaterialById(id: number): Observable<EchontillonMaterial>
  {
    return this.httpClient.get<EchontillonMaterial>(this.baseURL + '/' + id);
  }

  saveEchontillonMaterial(echontillonMaterial: EchontillonMaterial): Observable<Object>
  {
    return this.httpClient.post(this.baseURL + '/add', echontillonMaterial);
  }

  deleteEchontillonMaterial(id: number): Observable<Object>
  {
    return this.httpClient.delete(this.baseURL + '/' + id + '/delete');
  }

  updateEchontillonMaterial(id: number, echontillonMaterial: EchontillonMaterial): Observable<Object>
  {
    return this.httpClient.put(this.baseURL + '/' + id + '/update', echontillonMaterial);
  }
}
