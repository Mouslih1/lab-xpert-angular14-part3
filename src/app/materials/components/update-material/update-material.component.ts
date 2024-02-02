import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MaterialService} from "../../services/material.service";
import {Material} from "../../../Entity/Material";

@Component({
  selector: 'app-update-material',
  templateUrl: './update-material.component.html',
  styleUrls: ['./update-material.component.css']
})
export class UpdateMaterialComponent implements OnInit {

  // @ts-ignore
  material: Material = new Material();
  id: number = 0;
constructor(
  private router: Router,
    private route: ActivatedRoute,
    private materialService: MaterialService,
  ) { }

  ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
  this.materialService.getMaterialById(this.id).subscribe(data => {
    this.material = data;
  });
  }
  updateMaterial() {
    return this.materialService
      .updateMaterial(this.material.id, this.material)
      .subscribe(data =>
        this.gotoMaterialList())
  }
  gotoMaterialList() {
    this.router.navigate(['/materials']);
  }
  onSubmit() {
    this.updateMaterial();
  }

}
