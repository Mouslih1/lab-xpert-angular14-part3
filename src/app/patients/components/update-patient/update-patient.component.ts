import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/Entity/patient';
import { PatientService } from '../../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sexe } from 'src/app/Entity/sexe';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  id: number;
  updatePatientForm: FormGroup;
  genderOptions = Object.values(Sexe);

  constructor(private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void
  {
    this.id = this.route.snapshot.params['id'];
    this.updatePatientForm = this.fb.group({
      prenom: [null, [Validators.required]],
      nom: [null, [Validators.required]],
      dateNaissance: [null, [Validators.required]],
      ville: [null, [Validators.required]],
      tel: [null, [Validators.required]],
      age: [null, [Validators.required, Validators.min(0)]],
      sexe: [null, [Validators.required]],
      address: [null, [Validators.required]]
    });
    this.patientService.getPatientById(this.id).subscribe(data => this.updatePatientForm.patchValue(data));
  }

  goToPatientList()
  {
    this.router.navigate(['/patients']);
  }

  updatePatient()
  {
    return this.patientService.updatePatient(this.id, this.updatePatientForm.value).subscribe(() => this.goToPatientList());
  }

  onSubmit()
  {
    if (this.updatePatientForm.valid)
    {
      this.updatePatient();
    }
  }
}
