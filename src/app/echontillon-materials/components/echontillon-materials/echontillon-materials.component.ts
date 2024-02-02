import { Component, OnInit } from '@angular/core';
import { EchontillonMaterial } from 'src/app/Entity/echontillon-material';
import { EchontillonMaterialService } from '../../services/echontillon-material.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-echontillon-materials',
  templateUrl: './echontillon-materials.component.html',
  styleUrls: ['./echontillon-materials.component.css']
})
export class EchontillonMaterialsComponent implements OnInit {

  echontillonMaterial: EchontillonMaterial[];

  constructor(private echontillonMaterialService: EchontillonMaterialService, private router: Router) { }

  ngOnInit(): void
  {
    this.getEchontillonMaterial();
  }

  getEchontillonMaterial()
  {
    this.echontillonMaterialService.getEchontillonMaterials().subscribe(data => {
      console.log(this.echontillonMaterial);
      this.echontillonMaterial = data;
    })
  }

  deleteEchontillonMaterial(id: number)
  {
    this.echontillonMaterialService.deleteEchontillonMaterial(id).subscribe(() => this.getEchontillonMaterial());
  }

  updateEchontillonMaterial(id: number)
  {
    this.router.navigate(['echontillon-materials/update', id]);
  }
}
