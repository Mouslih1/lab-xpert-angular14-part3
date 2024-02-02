import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EchontillonMaterial } from 'src/app/Entity/echontillon-material';
import { EchontillonMaterialService } from '../../services/echontillon-material.service';
import { EchontillonService } from 'src/app/echontillons/services/echontillon.service';
import { MaterialService } from 'src/app/materials/services/material.service';

@Component({
  selector: 'app-save-echontillon-materials',
  templateUrl: './save-echontillon-materials.component.html',
  styleUrls: ['./save-echontillon-materials.component.css']
})
export class SaveEchontillonMaterialsComponent implements OnInit {

  echontillonMaterial: EchontillonMaterial = new EchontillonMaterial();
  echontillons: any;
  materials: any;

  constructor(private echontillonMaterialService: EchontillonMaterialService,
    private router: Router,
    private echontillonService: EchontillonService,
    private materialService: MaterialService) { }

  ngOnInit(): void
  {
    this.getEchontillons();
    this.getMaterials();
  }

  saveEchontillonMaterial()
  {
    const seletedEchontillon = this.echontillons.find(echontillon => echontillon.id == this.echontillonMaterial.echontillon);
    this.echontillonMaterial.echontillon = seletedEchontillon;

    console.log(this.echontillonMaterial.material)
    const seletedMaterial = this.materials.find(material => material.id == this.echontillonMaterial.material);
    console.log(seletedMaterial);
    this.echontillonMaterial.material = seletedMaterial;
    console.log(this.echontillonMaterial)

    this.echontillonMaterialService.saveEchontillonMaterial(this.echontillonMaterial).subscribe(data => {
      console.log(data);
      this.goToEchontillonMaterialList();
    });
  }

  onSubmit()
  {
    this.saveEchontillonMaterial();
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
