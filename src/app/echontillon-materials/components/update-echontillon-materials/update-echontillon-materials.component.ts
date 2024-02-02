import { Component, OnInit } from '@angular/core';
import { EchontillonMaterial } from 'src/app/Entity/echontillon-material';
import { EchontillonMaterialService } from '../../services/echontillon-material.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EchontillonService } from 'src/app/echontillons/services/echontillon.service';
import { MaterialService } from 'src/app/materials/services/material.service';

@Component({
  selector: 'app-update-echontillon-materials',
  templateUrl: './update-echontillon-materials.component.html',
  styleUrls: ['./update-echontillon-materials.component.css']
})
export class UpdateEchontillonMaterialsComponent implements OnInit {

  id: number;
  echontillonMaterial: EchontillonMaterial = new EchontillonMaterial();
  materials: any;
  echontillons: any;

  constructor(private echontillonMaterialService: EchontillonMaterialService,
     private router: Router,
     private echontillonService: EchontillonService,
     private materialService: MaterialService,
     private route: ActivatedRoute) { }

     ngOnInit(): void
     {
       this.id = this.route.snapshot.params['id'];
       this.echontillonMaterialService.getEchontillonMaterialById(this.id).subscribe(data => {
        this.echontillonMaterial = data;
       });
       this.getEchontillons();
       this.getMaterials();
     }

     updateEchontillonMaterial()
     {
       const seletedEchontillon = this.echontillons.find(echontillon => echontillon.id == this.echontillonMaterial.echontillon);
       this.echontillonMaterial.echontillon = seletedEchontillon;

       console.log(this.echontillonMaterial.material)
       const seletedMaterial = this.materials.find(material => material.id == this.echontillonMaterial.material);
       console.log(seletedMaterial);
       this.echontillonMaterial.material = seletedMaterial;
       console.log(this.echontillonMaterial)

       this.echontillonMaterialService.updateEchontillonMaterial(this.id, this.echontillonMaterial).subscribe(data => {
         console.log(data);
         this.goToEchontillonMaterialList();
       });
     }

     onSubmit()
     {
       this.updateEchontillonMaterial();
     }

     getMaterials()
     {
       this.materialService.getMaterialsList().subscribe(data => {
         this.materials = data;
       });
     }

     getEchontillons()
     {
       this.echontillonService.getEchontillons().subscribe(data => {
         this.echontillons = data;
       });
     }

     goToEchontillonMaterialList()
     {
       this.router.navigate(['echontillon-materials']);
     }
}
