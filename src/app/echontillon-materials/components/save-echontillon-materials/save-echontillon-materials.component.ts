import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EchontillonMaterial } from 'src/app/Entity/echontillon-material';
import { EchontillonMaterialService } from '../../services/echontillon-material.service';
import { EchontillonService } from 'src/app/echontillons/services/echontillon.service';
import { MaterialService } from 'src/app/materials/services/material.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-save-echontillon-materials',
  templateUrl: './save-echontillon-materials.component.html',
  styleUrls: ['./save-echontillon-materials.component.css']
})
export class SaveEchontillonMaterialsComponent implements OnInit {

  echontillonMaterialForm: FormGroup;
  echontillons: any;
  materials: any;

  constructor(private echontillonMaterialService: EchontillonMaterialService,
    private router: Router,
    private echontillonService: EchontillonService,
    private materialService: MaterialService,
    private fb: FormBuilder) { }

  ngOnInit(): void
  {
    this.echontillonMaterialForm = this.fb.group({
      echontillon: [null, [Validators.required]],
      material: [null, [Validators.required]],
      quantity: [null, [Validators.required]]
    });
    this.getEchontillons();
    this.getMaterials();
  }

  saveEchontillonMaterial()
  {
    const seletedEchontillon = this.echontillons.find(echontillon => echontillon.id == this.echontillonMaterialForm.value.echontillon);
    this.echontillonMaterialForm.value.echontillon = seletedEchontillon;

    console.log(this.echontillonMaterialForm.value.material)
    const seletedMaterial = this.materials.find(material => material.id == this.echontillonMaterialForm.value.material);
    console.log(seletedMaterial);
    this.echontillonMaterialForm.value.material = seletedMaterial;
    console.log(this.echontillonMaterialForm.value)

    this.echontillonMaterialService.saveEchontillonMaterial(this.echontillonMaterialForm.value).subscribe(data => {
      console.log(data);
      this.goToEchontillonMaterialList();
    });
  }

  onSubmit()
  {
    if(this.echontillonMaterialForm.valid)
    {
      this.saveEchontillonMaterial();
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
