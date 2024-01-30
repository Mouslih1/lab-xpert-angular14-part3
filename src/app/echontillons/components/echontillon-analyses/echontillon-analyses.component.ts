import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EchontillonService } from '../../services/echontillon.service';
import { Echontillon } from 'src/app/Entity/echontillon';

@Component({
  selector: 'app-echontillon-analyses',
  templateUrl: './echontillon-analyses.component.html',
  styleUrls: ['./echontillon-analyses.component.css']
})
export class EchontillonAnalysesComponent implements OnInit {

  id: number;
  echontillon: Echontillon = new Echontillon();

  constructor(private route: ActivatedRoute, private echontillonService: EchontillonService, private router: Router) { }

  ngOnInit(): void
  {
    this.id = this.route.snapshot.params['id'];
    this.echontillonService.getEchontillonById(this.id).subscribe(data => {
      this.echontillon = data;
    });
  }

  goToEchontillonsList()
  {
    return this.router.navigate(['echontillons']);
  }
}
