import { Component, OnInit } from '@angular/core';
import { Analyse } from 'src/app/Entity/analyse';
import { Echontillon } from 'src/app/Entity/echontillon';
import { EchontillonService } from '../../services/echontillon.service';
import { AnalyseService } from 'src/app/analyses/services/analyse.service';
import { PatientService } from 'src/app/patients/services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-echontillon',
  templateUrl: './update-echontillon.component.html',
  styleUrls: ['./update-echontillon.component.css']
})
export class UpdateEchontillonComponent implements OnInit {

  id: number;
  echontillon: Echontillon = new Echontillon();
  patients: any;
  analyses: Analyse[];

  constructor(
    private echontillonService: EchontillonService,
    private analyseService: AnalyseService,
    private patientService: PatientService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void
  {
    this.id = this.route.snapshot.params['id'];

    this.getPatients();
    this.getAnalyses();
    this.echontillonService.getEchontillonById(this.id).subscribe(data => {
      this.echontillon = data;
      console.log(this.echontillon);
    });
  }

  goToEchontillonList()
  {
    this.router.navigate(['echontillons']);
  }

  updateEchontillon()
  {
    const seletedPatient = this.patients.find(patient => patient.id == this.echontillon.patient);
    this.echontillon.patient = seletedPatient;

    return this.echontillonService.updateEchontillon(this.id, this.echontillon).subscribe(() => this.goToEchontillonList());
  }

  onSubmit()
  {
    this.updateEchontillon();
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
