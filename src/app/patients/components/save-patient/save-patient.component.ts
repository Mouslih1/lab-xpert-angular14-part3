import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Entity/patient';
import { PatientService } from '../../services/patient.service';
import { Sexe } from 'src/app/Entity/sexe';

@Component({
  selector: 'app-save-patient',
  templateUrl: './save-patient.component.html',
  styleUrls: ['./save-patient.component.css']
})
export class SavePatientComponent implements OnInit {

  patient: Patient = new Patient();
  genderOptions = Object.values(Sexe);

  constructor(private router: Router, private patientService: PatientService) { }

  ngOnInit(): void {
  }

  savePatient()
  {
    this.patientService.savePatient(this.patient).subscribe(data => {
      console.log(data),
      this.goToPatientList()
    });
  }

  goToPatientList()
  {
    this.router.navigate(['/patients']);
  }

  onSubmit()
  {
    this.savePatient();
  }
}
