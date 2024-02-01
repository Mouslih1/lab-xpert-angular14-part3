import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ReactifService } from "../../services/reactif.service";
import { Reactif } from "../../../Entity/Reactif";
import { Fournisseur } from "../../../Entity/Fournisseur";
import { FournisseurService } from "../../../fournisseurs/services/fournisseur.service";


@Component({
  selector: 'app-save-reactif',
  templateUrl: './save-reactif.component.html',
  styleUrls: ['./save-reactif.component.css']
})
export class SaveReactifComponent implements OnInit {

  fournisseurs: Fournisseur[];
  // @ts-ignore
  reactif: Reactif = new Reactif();
  constructor(
    private router: Router,
    private reactifService: ReactifService,
    private fournisseurService: FournisseurService
  ) { }

  ngOnInit(): void {
    this.saveReactif()
    this.getFournisseursList();
  }

  saveReactif(){
    this.reactifService
      .saveReactif(this.reactif)
      .subscribe(data => {
        this.goToReactifsList();
      })
  }
  getFournisseursList() {
    this.fournisseurService.getFournisseursList().subscribe(data => {
      this.fournisseurs = data;
      this.fournisseurs.sort((a, b) => a.id - b.id);
    });
  }

  goToReactifsList(){
    this.router.navigate(['/reactifs']);
  }
  onSubmit(){
    this.saveReactif();
  }
}
