import { Component, OnInit } from '@angular/core';
import { Echontillon } from 'src/app/Entity/echontillon';
import { EchontillonService } from '../../services/echontillon.service';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Entity/patient';
import { PatientService } from 'src/app/patients/services/patient.service';
import { Analyse } from 'src/app/Entity/analyse';
import { AnalyseService } from 'src/app/analyses/services/analyse.service';

@Component({
  selector: 'app-save-echontillon',
  templateUrl: './save-echontillon.component.html',
  styleUrls: ['./save-echontillon.component.css']
})
export class SaveEchontillonComponent implements OnInit {

  echontillon: Echontillon = new Echontillon();
  patients: any;
  analyses: Analyse[];


  constructor(private analyseService: AnalyseService, private echontillonService: EchontillonService, private router: Router, private patientService: PatientService) { }

  ngOnInit(): void
  {
    this.getPatients();
    this.getAnalyses();
  }

  saveEchontillon()
  {
    const seletedPatient = this.patients.find(patient => patient.id == this.echontillon.patient);
    this.echontillon.patient = seletedPatient;

    this.echontillonService.saveEchontillon(this.echontillon).subscribe(data => {
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
    this.saveEchontillon();
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
