import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { FournisseursComponent } from "./fournisseurs/components/fournisseurs/fournisseurs.component";
import { SaveFournisseurComponent } from "./fournisseurs/components/save-fournisseur/save-fournisseur.component";
import { UpdateFournisseurComponent } from "./fournisseurs/components/update-fournisseur/update-fournisseur.component";
import {ReactifsComponent} from "./reactifs/components/reactifs/reactifs.component";
import {SaveReactifComponent} from "./reactifs/components/save-reactif/save-reactif.component";
import {UpdateReactifComponent} from "./reactifs/components/update-reactif/update-reactif.component";
import {MaterialsComponent} from "./materials/components/materials/materials.component";
import {SaveMaterialComponent} from "./materials/components/save-material/save-material.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'fournisseurs', component: FournisseursComponent },
  { path: 'fournisseurs/add', component: SaveFournisseurComponent },
  { path: 'fournisseurs/update/:id', component: UpdateFournisseurComponent },
  { path: 'reactifs', component: ReactifsComponent },
  { path: 'reactifs/add', component: SaveReactifComponent },
  { path: 'reactifs/update/:id', component: UpdateReactifComponent },
  { path: 'materials', component: MaterialsComponent },
  { path: 'materials/add', component: SaveMaterialComponent },
  { path: 'materials/update/:id', component: UpdateReactifComponent },
  { path: '', redirectTo:'dashboard', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

