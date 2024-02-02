import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Entity/patient';
import { PatientService } from '../../services/patient.service';
import { Sexe } from 'src/app/Entity/sexe';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-save-patient',
  templateUrl: './save-patient.component.html',
  styleUrls: ['./save-patient.component.css']
})
export class SavePatientComponent implements OnInit {

  // patient: Patient = new Patient();
  genderOptions = Object.values(Sexe);
  savePatientForm: FormGroup;

  constructor(private router: Router, private patientService: PatientService, private fb: FormBuilder) { }

  ngOnInit(): void
  {
    this.savePatientForm = this.fb.group({
      prenom: [null, [Validators.required]],
      nom: [null, [Validators.required]],
      dateNaissance: [null, [Validators.required]],
      ville: [null, [Validators.required]],
      tel: [null, [Validators.required]],
      age: [null, [Validators.required, Validators.min(0)]],
      sexe: [null, [Validators.required]],
      address: [null, [Validators.required]]
    });
  }

  savePatient()
  {
    this.patientService.savePatient(this.savePatientForm.value).subscribe({
      next: () => {
        this.goToPatientList();
        this.savePatientForm.reset();
      },
      error: (error) => {
        console.error('An error occurred while saving the patient:', error);
      }
    });
  }

  goToPatientList()
  {
    this.router.navigate(['/patients']);
  }

  onSubmit()
  {
    if (this.savePatientForm.valid)
    {
      this.savePatient();
    }
  }
}
