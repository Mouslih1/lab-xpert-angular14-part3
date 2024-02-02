import { Component, OnInit } from '@angular/core';
import { Analyse } from 'src/app/Entity/analyse';
import { Echontillon } from 'src/app/Entity/echontillon';
import { EchontillonService } from '../../services/echontillon.service';
import { AnalyseService } from 'src/app/analyses/services/analyse.service';
import { PatientService } from 'src/app/patients/services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-echontillon',
  templateUrl: './update-echontillon.component.html',
  styleUrls: ['./update-echontillon.component.css']
})
export class UpdateEchontillonComponent implements OnInit {

  id: number;
  echontillonForm: FormGroup;
  patients: any;
  analyses: Analyse[];

  constructor(
    private echontillonService: EchontillonService,
    private analyseService: AnalyseService,
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void
  {
    this.echontillonForm = this.fb.group({
      patient: [null, [Validators.required]],
      datePrelevement: [null, [Validators.required]],
      analyses: [null, [Validators.required]]
    });
    this.id = this.route.snapshot.params['id'];
    this.getPatients();
    this.getAnalyses();
    this.echontillonService.getEchontillonById(this.id).subscribe(data => {
      this.echontillonForm.patchValue(data);
    });
  }

  goToEchontillonList()
  {
    this.router.navigate(['echontillons']);
  }

  updateEchontillon()
  {
    const seletedPatient = this.patients.find(patient => patient.id == this.echontillonForm.value.patient);
    this.echontillonForm.value.patient = seletedPatient;

    console.log(this.echontillonForm.value.patient)
    return this.echontillonService.updateEchontillon(this.id, this.echontillonForm.value).subscribe(() => this.goToEchontillonList());
  }

  onSubmit()
  {
    if(this.echontillonForm.valid)
    {
      this.updateEchontillon();
    }
  }

  getPatients()
  {
    this.patientService.getAllPatients().subscribe(data => {
      this.patients = data;
    });
  }

  getAnalyses()
  {
    this.analyseService.getAnalyses().subscribe(data => {
      this.analyses = data;
    });
  }
}
