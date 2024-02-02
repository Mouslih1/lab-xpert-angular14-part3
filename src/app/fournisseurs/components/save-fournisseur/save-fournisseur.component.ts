import { Component, OnInit } from '@angular/core';
import { FournisseurService } from "../../services/fournisseur.service";
import { Router } from '@angular/router';
import { Fournisseur } from "../../../Entity/Fournisseur";

@Component({
  selector: 'app-save-fournisseur',
  templateUrl: './save-fournisseur.component.html',
  styleUrls: ['./save-fournisseur.component.css']
})
export class SaveFournisseurComponent implements OnInit {

  // @ts-ignore
  fournisseur: Fournisseur = new Fournisseur();

  constructor( private router: Router, private fournisseurService: FournisseurService) { }

  ngOnInit(): void {
    this.saveFournisseur();
  }
  saveFournisseur(){
    this.fournisseurService
      .saveFournisseur(this.fournisseur)
      .subscribe(data => {
        this.goToFournisseurList();
      })
  }
  goToFournisseurList(){
    this.router.navigate(['/fournisseurs']);
  }
  onSubmit(){
    this.saveFournisseur();
  }

}
