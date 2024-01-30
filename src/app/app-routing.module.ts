import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { FournisseursComponent } from "./fournisseurs/components/fournisseurs/fournisseurs.component";
import { SaveFournisseurComponent } from "./fournisseurs/components/save-fournisseur/save-fournisseur.component";
import { UpdateFournisseurComponent } from "./fournisseurs/components/update-fournisseur/update-fournisseur.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'fournisseur', component: FournisseursComponent },
  { path: 'add/fournisseur', component: SaveFournisseurComponent },
  { path: 'update/fournisseur/:id', component: UpdateFournisseurComponent },
  { path: '', redirectTo:'dashboard', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

