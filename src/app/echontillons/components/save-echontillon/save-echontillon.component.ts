import { Component, OnInit } from '@angular/core';
import { Echontillon } from 'src/app/Entity/echontillon';
import { EchontillonService } from '../../services/echontillon.service';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Entity/patient';
import { PatientService } from 'src/app/patients/services/patient.service';
import { Analyse } from 'src/app/Entity/analyse';
import { AnalyseService } from 'src/app/analyses/services/analyse.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-save-echontillon',
  templateUrl: './save-echontillon.component.html',
  styleUrls: ['./save-echontillon.component.css']
})
export class SaveEchontillonComponent implements OnInit {

  //echontillon: Echontillon = new Echontillon();
  echontillonForm: FormGroup;
  patients: any;
  analyses: Analyse[];


  constructor(private analyseService: AnalyseService,
    private echontillonService: EchontillonService,
    private router: Router,
    private patientService: PatientService,
    private fb: FormBuilder) { }

  ngOnInit(): void
  {
    this.echontillonForm = this.fb.group({
      patient: [null, [Validators.required]],
      datePrelevement: [null, [Validators.required]],
      analyses: [null, [Validators.required]]
    });
    this.getPatients();
    this.getAnalyses();
  }

  saveEchontillon()
  {
    const seletedPatient = this.patients.find(patient => patient.id == this.echontillonForm.value.patient);
    this.echontillonForm.value.patient = seletedPatient;

    this.echontillonService.saveEchontillon(this.echontillonForm.value).subscribe(data => {
      console.log(data);
      this.goToEchontillonList();
    });
  }

  goToEchontillonList()
  {
    this.router.navigate(['echontillons']);
  }

  onSubmit()
  {
    if(this.echontillonForm.valid)
    {
      this.saveEchontillon();
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
