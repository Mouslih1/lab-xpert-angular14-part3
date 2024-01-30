import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/Entity/patient';
import { PatientService } from '../../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})

export class PatientsComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void
  {
    this.getPatients();
  }

  getPatients()
  {
    this.patientService.getAllPatients().subscribe(data => {
      console.log(data)
      this.patients = data;
    });
  }

  updatePatient(id: number)
  {
    this.router.navigate(['patients/update', id]);
  }

  deletePatient(id: number)
  {
    this.patientService.deletePatient(id).subscribe(() => this.getPatients());
  }
}
