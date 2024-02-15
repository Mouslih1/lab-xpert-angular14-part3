import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PatientService } from './patient.service';
import { Patient } from 'src/app/Entity/patient';
import { Sexe } from 'src/app/Entity/sexe';

describe('PatientService', () => {
  let service: PatientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientService]
    });
    service = TestBed.inject(PatientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all patients', () => {
    const dummyPatients: Patient[] = [
      {
        id: 1,
        nom: 'mouslih',
        prenom: 'marouane',
        address: 'address 1',
        tel: '+212 630011276',
        ville: 'casablanca',
        sexe: Sexe.MALE,
        dateNaissance: new Date('2022-12-31'),
        age: 22,
        echontillons: []
      },
      {
        id: 2,
        nom: 'mouslih',
        prenom: 'marouane',
        address: 'address 1',
        tel: '+212 630011276',
        ville: 'casablanca',
        sexe: Sexe.MALE,
        dateNaissance: new Date('2022-12-31'),
        age: 22,
        echontillons: []
      }
    ];

    service.getAllPatients().subscribe(patients => {
      expect(patients.length).toBe(2);
      expect(patients).toEqual(dummyPatients);
    });

    const req = httpMock.expectOne('http://localhost:8081/api/v1/patients');
    expect(req.request.method).toBe('GET');
    req.flush(dummyPatients);
  });

  it('should save a patient', () => {
    const newPatient: Patient = {
      id: 1,
      nom: 'mouslih',
      prenom: 'marouane',
      address: 'address 1',
      tel: '+212 630011276',
      ville: 'casablanca',
      sexe: Sexe.MALE,
      dateNaissance: new Date('2022-12-31'),
      age: 22,
      echontillons: []};

    service.savePatient(newPatient).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('http://localhost:8081/api/v1/patients/add');
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

  it('should get a patient by ID', () => {
    const dummyPatient: Patient = {
      id: 1,
      nom: 'mouslih',
      prenom: 'marouane',
      address: 'address 1',
      tel: '+212 630011276',
      ville: 'casablanca',
      sexe: Sexe.MALE,
      dateNaissance: new Date('2022-12-31'),
      age: 22,
      echontillons: []
    };

    const patientId = 1;

    service.getPatientById(patientId).subscribe(patient => {
      expect(patient).toEqual(dummyPatient);
    });

    const req = httpMock.expectOne(`http://localhost:8081/api/v1/patients/${patientId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPatient);
  });

  it('should update a patient', () => {
    const updatedPatient: Patient = {
      id: 1,
      nom: 'Updated Name',
      prenom: 'Updated Firstname',
      address: 'Updated Address',
      tel: '+212 630011276',
      ville: 'Updated City',
      sexe: Sexe.FEMALE,
      dateNaissance: new Date('1990-01-01'),
      age: 32,
      echontillons: []
    };

    const patientId = 1;

    service.updatePatient(patientId, updatedPatient).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`http://localhost:8081/api/v1/patients/${patientId}/update`);
    expect(req.request.method).toBe('PUT');
    req.flush({});
  });

  it('should delete a patient', () => {
    const patientId = 1;

    service.deletePatient(patientId).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`http://localhost:8081/api/v1/patients/${patientId}/delete`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
