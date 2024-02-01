import { Component, OnInit } from '@angular/core';
import { Echontillon } from 'src/app/Entity/echontillon';
import { EchontillonService } from '../../services/echontillon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-echontillons',
  templateUrl: './echontillons.component.html',
  styleUrls: ['./echontillons.component.css']
})
export class EchontillonsComponent implements OnInit {

  echontillons: Echontillon[];

  constructor(private echontillonService: EchontillonService, private router: Router) { }

  ngOnInit(): void
  {
    this.getEchontillons();
  }

  getEchontillons()
  {
    this.echontillonService.getEchontillons().subscribe(data => {
      this.echontillons = data;
    })
  }

  echontillonAnalyseDetail(id: number)
  {
    this.router.navigate(['echontillons/echontillon-analyses', id])
  }

  deleteEchontillon(id: number)
  {
    this.echontillonService.deleteEchontillon(id).subscribe(() => this.getEchontillons());
  }

  updateEchontillon(id: number)
  {
    this.router.navigate(['echontillons/update', id]);
  }
}
