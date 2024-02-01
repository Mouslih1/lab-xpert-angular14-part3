import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FournisseurService} from "../../../fournisseurs/services/fournisseur.service";
import {ReactifService} from "../../services/reactif.service";
import {Fournisseur} from "../../../Entity/Fournisseur";
import {Reactif} from "../../../Entity/Reactif";

@Component({
  selector: 'app-update-reactif',
  templateUrl: './update-reactif.component.html',
  styleUrls: ['./update-reactif.component.css']
})
export class UpdateReactifComponent implements OnInit {

  // @ts-ignore
  reactif: Reactif = new Reactif();

  fournisseurs: Fournisseur[];
  id: number = 0;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reactifService: ReactifService,
    private fournisseurService: FournisseurService,
  ) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.reactifService.getReactifById(this.id).subscribe(data => {
    this.reactif = data;
    });
    this.getFournisseursList();

  }
 gotoReactifList() {
   this.router.navigate(['/reactifs']);
 }

 updateReactif() {
   return this.reactifService
     .updateReactif(this.reactif.id, this.reactif)
     .subscribe(data =>
       this.gotoReactifList())
 }
  onSubmit() {
    this.updateReactif();
  }
  getFournisseursList() {
    this.fournisseurService.getFournisseursList().subscribe(data => {
      this.fournisseurs = data;
      this.fournisseurs.sort((a, b) => a.id - b.id);
    });
  }
}
