import { Component, OnInit } from '@angular/core';
import {Material} from "../../../Entity/Material";
import {Router} from "@angular/router";
import {MaterialService} from "../../services/material.service";

@Component({
  selector: 'app-save-material',
  templateUrl: './save-material.component.html',
  styleUrls: ['./save-material.component.css']
})
export class SaveMaterialComponent implements OnInit {

  // @ts-ignore
  material: Material = new Material();
  constructor(
    private router: Router,
    private materialService: MaterialService
  ) { }

  ngOnInit(): void {
    this.saveMaterial()
  }
  saveMaterial(){
    this.materialService
      .saveMaterial(this.material)
      .subscribe(data => {
        this.goToMaterialsList();
      })
  }
  goToMaterialsList(){
    this.router.navigate(['/materials']);
  }
  onSubmit(){
    this.saveMaterial();
  }

}
