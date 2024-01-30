import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/Entity/patient';
import { PatientService } from '../../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sexe } from 'src/app/Entity/sexe';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  id: number;
  patient: Patient = new Patient();
  genderOptions = Object.values(Sexe);

  constructor(private patientService: PatientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void
  {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => this.patient = data);
  }

  goToPatientList()
  {
    this.router.navigate(['/patients']);
  }

  updatePatient()
  {
    return this.patientService.updatePatient(this.id, this.patient).subscribe(() => this.goToPatientList());
  }

  onSubmit()
  {
    this.updatePatient();
  }
}
