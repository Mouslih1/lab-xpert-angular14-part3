import { Component, OnInit } from '@angular/core';
import { FournisseurService } from "../../services/fournisseur.service";
import { Fournisseur } from "../../../Entity/Fournisseur";
import { Router } from "@angular/router";

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {

  fournisseurs: Fournisseur[];

  constructor(
    private router: Router,
    private fournisseurService: FournisseurService
  ) { }

  ngOnInit(): void {
    this.getFournisseursList();
  }

  getFournisseursList() {
    this.fournisseurService.getFournisseursList().subscribe(data => {
      this.fournisseurs = data;
      this.fournisseurs.sort((a, b) => a.id - b.id);
    });
  }

  updateFournisseur(id: number) {
    this.router.navigate(['/fournisseurs/update', id]);
  }

  deleteFournisseur(id: number) {
    this.fournisseurService.deleteFournisseur(id).subscribe(data => {
      this.getFournisseursList();
    })
  }
}
