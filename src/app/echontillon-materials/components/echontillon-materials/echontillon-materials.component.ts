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

  }

}
