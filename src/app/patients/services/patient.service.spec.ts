import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PatientService } from './patient.service';
import { Patient } from 'src/app/Entity/patient';
import { Sexe } from 'src/app/Entity/sexe';

const baseUrl = "http://localhost:8081/api/patients";

describe('PatientService', () => {
  let service: PatientService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PatientService]
    });
    service = TestBed.inject(PatientService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save a patient', () => {
    const mockPatient: Patient = {
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

    const mockResponseData = { id: 123, message: 'Patient created successfully' };

    service.savePatient(mockPatient).subscribe(response => {
      expect(response).toEqual(mockResponseData);
    });

    const req = httpTestingController.expectOne(baseUrl + '/add');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponseData);
  });

  it('should get patients', () => {
    const mockPatients: Patient[] = [
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
    ];

    service.getAllPatients().subscribe(patients => {
      expect(patients).toEqual(mockPatients);
    });

    const req = httpTestingController.expectOne(baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockPatients);
  });

  it('should get a patient by id', () => {
    const mockPatient: Patient = {
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

    service.getPatientById(mockPatient.id).subscribe(patient => {
      expect(patient).toEqual(mockPatient);
    });

    const req = httpTestingController.expectOne(`${baseUrl}/${mockPatient.id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPatient);
  });

  it('should update a patient', () => {
    const mockPatient: Patient = {
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

    service.updatePatient(mockPatient.id, mockPatient).subscribe(updatedPatient => {
      expect(updatedPatient).toEqual(mockPatient);
    });

    const req = httpTestingController.expectOne(`${baseUrl}/${mockPatient.id}/update`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockPatient);
  });

  it('should delete a patient', () => {
    const mockPatient: Patient = {
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

    service.deletePatient(mockPatient.id).subscribe(deletedPatient => {
      expect(deletedPatient).toEqual(mockPatient);
    });

    const req = httpTestingController.expectOne(`${baseUrl}/${mockPatient.id}/delete`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockPatient);
  });
});
