import { Component, OnInit } from '@angular/core';
import { Material } from "../../../Entity/Material";
import { Router } from "@angular/router";
import { MaterialService } from "../../services/material.service";

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.css']
})
export class MaterialsComponent implements OnInit {

  materials: Material[];

  constructor(
    private router: Router,
    private materialService: MaterialService
  ) { }

  ngOnInit(): void
  {
    this.getMaterialsList();
  }

  updateMaterial(id: number) {
    this.router.navigate(['/materials/update', id]);
  }

  getMaterialsList()
  {
    this.materialService.getMaterialsList().subscribe(data => {
      this.materials = data;
      console.log(data);
      this.materials.sort((a, b) => a.id - b.id);
    });
  }

  deleteMaterial(id: number) {
    this.materialService.deleteMaterial(id).subscribe(data => {
      this.getMaterialsList();
    })
  }

}
