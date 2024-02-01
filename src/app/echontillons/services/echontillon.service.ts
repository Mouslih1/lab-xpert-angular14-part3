import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Echontillon } from 'src/app/Entity/echontillon';

@Injectable({
  providedIn: 'root'
})
export class EchontillonService {

  private baseURL = 'http://localhost:8081/api/v1/echontillons';

  constructor(private httpClient: HttpClient) { }

  getEchontillons(): Observable<Echontillon[]>
  {
    return this.httpClient.get<Echontillon[]>(this.baseURL);
  }

  getEchontillonById(id: number): Observable<Echontillon>
  {
    return this.httpClient.get<Echontillon>(this.baseURL + '/' + id);
  }

  saveEchontillon(echontillon: Echontillon): Observable<Object>
  {
    return this.httpClient.post(this.baseURL + '/add', echontillon);
  }

  deleteEchontillon(id: number): Observable<Object>
  {
    return this.httpClient.delete(this.baseURL + '/' + id + '/delete');
  }

  updateEchontillon(id: number, echontillon: Echontillon): Observable<Object>
  {
    return this.httpClient.put(this.baseURL + '/' + id + '/update', echontillon);
  }
}
