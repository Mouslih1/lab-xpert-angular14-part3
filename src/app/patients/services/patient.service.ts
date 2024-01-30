import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/Entity/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:8081/api/v1/patients";

  constructor(private httpClient: HttpClient) { }

  getAllPatients(): Observable<Patient[]>
  {
    return this.httpClient.get<Patient[]>(this.baseURL);
  }

  savePatient(patient: Patient): Observable<Object>
  {
    return this.httpClient.post(this.baseURL + '/add', patient);
  }

  getPatientById(id: number): Observable<Patient>
  {
    return this.httpClient.get<Patient>(this.baseURL + '/' + id);
  }

  updatePatient(id: number, patient: Patient): Observable<Object>
  {
    return this.httpClient.put(this.baseURL + '/' + id + '/update', patient);
  }

  deletePatient(id: number): Observable<Object>
  {
    return this.httpClient.delete(this.baseURL + '/' + id + '/delete');
  }

  searchPatientByName(name: string): Observable<Patient[]>
  {
    return this.httpClient.get<Patient[]>(this.baseURL + '/patient?name=' + name );
  }
}
