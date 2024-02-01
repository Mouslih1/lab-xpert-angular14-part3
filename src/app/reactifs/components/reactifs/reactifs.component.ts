import { Component, OnInit } from '@angular/core';
import { Reactif } from "../../../Entity/Reactif";
import { Router } from "@angular/router";
import { ReactifService } from "../../services/reactif.service";

@Component({
  selector: 'app-reactifs',
  templateUrl: './reactifs.component.html',
  styleUrls: ['./reactifs.component.css']
})
export class ReactifsComponent implements OnInit {
  reactifs: Reactif[];

  constructor(
    private router: Router,
    private  reactifService: ReactifService
  ) { }

  ngOnInit(): void {
    this.getReactifsList();
  }
  getReactifsList() {
    this.reactifService.getReactifsList().subscribe(data => {
      this.reactifs = data;
      this.reactifs.sort((a, b) => a.id - b.id);
    });
  }

  updateReactif(id: number) {
    this.router.navigate(['/reactifs/update', id]);
  }

  deleteReactif(id: number) {
    this.reactifService.deleteReactif(id).subscribe(data => {
      this.getReactifsList();
    })
  }
}
