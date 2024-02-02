import { Component, OnInit } from '@angular/core';
import { EchontillonMaterial } from 'src/app/Entity/echontillon-material';
import { EchontillonMaterialService } from '../../services/echontillon-material.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EchontillonService } from 'src/app/echontillons/services/echontillon.service';
import { MaterialService } from 'src/app/materials/services/material.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-echontillon-materials',
  templateUrl: './update-echontillon-materials.component.html',
  styleUrls: ['./update-echontillon-materials.component.css']
})
export class UpdateEchontillonMaterialsComponent implements OnInit {

  id: number;
  echontillonMaterialForm: FormGroup;
  materials: any;
  echontillons: any;

  constructor(private echontillonMaterialService: EchontillonMaterialService,
     private router: Router,
     private echontillonService: EchontillonService,
     private materialService: MaterialService,
     private route: ActivatedRoute,
     private fb: FormBuilder) { }

     ngOnInit(): void
     {
      this.echontillonMaterialForm = this.fb.group({
        echontillon: [null, [Validators.required]],
        material: [null, [Validators.required]],
        quantity: [null, [Validators.required]]
      });
       this.id = this.route.snapshot.params['id'];
       this.echontillonMaterialService.getEchontillonMaterialById(this.id).subscribe(data => {
        this.echontillonMaterialForm.patchValue(data);
       });
       this.getEchontillons();
       this.getMaterials();
     }

     updateEchontillonMaterial()
     {
       const seletedEchontillon = this.echontillons.find(echontillon => echontillon.id == this.echontillonMaterialForm.value.echontillon);
       this.echontillonMaterialForm.value.echontillon = seletedEchontillon;

       console.log(this.echontillonMaterialForm.value.material)
       const seletedMaterial = this.materials.find(material => material.id == this.echontillonMaterialForm.value.material);
       console.log(seletedMaterial);
       this.echontillonMaterialForm.value.material = seletedMaterial;
       console.log(this.echontillonMaterialForm.value)

       this.echontillonMaterialService.updateEchontillonMaterial(this.id, this.echontillonMaterialForm.value).subscribe(data => {
         console.log(data);
         this.goToEchontillonMaterialList();
       });
     }

     onSubmit()
     {
      if(this.echontillonMaterialForm.valid)
      {
        this.updateEchontillonMaterial();
      }
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
