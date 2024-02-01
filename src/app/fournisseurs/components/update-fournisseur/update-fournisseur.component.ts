import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FournisseurService } from "../../services/fournisseur.service";
import { Fournisseur } from "../../../Entity/Fournisseur";

@Component({
  selector: 'app-update-fournisseur',
  templateUrl: './update-fournisseur.component.html',
  styleUrls: ['./update-fournisseur.component.css']
})
export class UpdateFournisseurComponent implements OnInit {

  // @ts-ignore
  fournisseur: Fournisseur = new Fournisseur();
  id: number = 0;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fournisseurService: FournisseurService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fournisseurService.getFournisseurById(this.id).subscribe(data => {
      this.fournisseur = data;
    }/*, error => console.log(error)*/);
  }

  goToFournisseurList(){
    this.router.navigate(['/fournisseurs']);
  }

  updateFournisseur(){
    return this.fournisseurService
      .updateFournisseur( this.fournisseur.id, this.fournisseur)
      .subscribe(data =>
        this.goToFournisseurList())
  }

  onSubmit(){
    this.updateFournisseur();
  }

}
