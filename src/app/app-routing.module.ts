import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { FournisseursComponent } from './fournisseurs/components/fournisseurs/fournisseurs.component';
import { SaveFournisseurComponent } from './fournisseurs/components/save-fournisseur/save-fournisseur.component';
import { UpdateFournisseurComponent } from './fournisseurs/components/update-fournisseur/update-fournisseur.component';
import { ReactifsComponent } from './reactifs/components/reactifs/reactifs.component';
import { SaveReactifComponent } from './reactifs/components/save-reactif/save-reactif.component';
import { UpdateReactifComponent } from './reactifs/components/update-reactif/update-reactif.component';
import { MaterialsComponent } from './materials/components/materials/materials.component';
import { SaveMaterialComponent } from './materials/components/save-material/save-material.component';
import { PatientsComponent } from './patients/components/patients/patients.component';
import { SavePatientComponent } from './patients/components/save-patient/save-patient.component';
import { UpdatePatientComponent } from './patients/components/update-patient/update-patient.component';
import { EchontillonAnalysesComponent } from './echontillons/components/echontillon-analyses/echontillon-analyses.component';
import { SaveEchontillonComponent } from './echontillons/components/save-echontillon/save-echontillon.component';
import { EchontillonsComponent } from './echontillons/components/echontillons/echontillons.component';
import { UpdateEchontillonComponent } from './echontillons/components/update-echontillon/update-echontillon.component';
import { EchontillonMaterialsComponent } from './echontillon-materials/components/echontillon-materials/echontillon-materials.component';
import { SaveEchontillonMaterialsComponent } from './echontillon-materials/components/save-echontillon-materials/save-echontillon-materials.component';
import { UpdateEchontillonMaterialsComponent } from './echontillon-materials/components/update-echontillon-materials/update-echontillon-materials.component';
import { AuthentificationComponent } from './authentification/components/authentification/authentification.component';
import { NavbarComponent } from './navbar/components/navbar/navbar.component';
import { AuthentificationGuardService } from './authentification/services/authentification.guard.service';


const routes: Routes = [
  { path: 'admin', component: NavbarComponent, children:[
    { path: 'dashboard', component: DashboardComponent, canActivate:[AuthentificationGuardService], data: {role:['Admin', 'Responsable']}},
    { path: 'fournisseurs', component: FournisseursComponent, canActivate:[AuthentificationGuardService], data: {role:['Admin', 'Responsable']} },
    { path: 'fournisseurs/add', component: SaveFournisseurComponent, canActivate:[AuthentificationGuardService], data: {role:['Admin', 'Responsable']} },
    { path: 'fournisseurs/update/:id', component: UpdateFournisseurComponent, canActivate:[AuthentificationGuardService], data: {role:['Admin', 'Responsable']} },
    { path: 'reactifs', component: ReactifsComponent, canActivate:[AuthentificationGuardService], data: {role:['Admin', 'Responsable', 'Technicien']} },
    { path: 'reactifs/add', component: SaveReactifComponent, canActivate:[AuthentificationGuardService], data: {role:['Admin', 'Responsable']} },
    { path: 'reactifs/update/:id', component: UpdateReactifComponent, canActivate:[AuthentificationGuardService], data: {role:['Admin', 'Responsable']} },
    { path: 'materials', component: MaterialsComponent, canActivate:[AuthentificationGuardService], data: {role:['Admin', 'Responsable']} },
    { path: 'materials/add', component: SaveMaterialComponent, canActivate:[AuthentificationGuardService], data: {role:['Admin', 'Responsable']} },
    { path: 'patients', component: PatientsComponent, canActivate:[AuthentificationGuardService], data: {role:['Admin', 'Responsable', 'Technicien']} },
    { path: 'patients/save', component: SavePatientComponent, canActivate:[AuthentificationGuardService], data: {role:['Technicien', 'Responsable']} },
    { path: 'patients/update/:id', component: UpdatePatientComponent, canActivate:[AuthentificationGuardService], data: {role:['Technicien', 'Responsable']} },
    { path: 'echontillons/echontillon-analyses/:id', component: EchontillonAnalysesComponent, canActivate:[AuthentificationGuardService], data: {role:['Admin','Technicien', 'Responsable']}},
    { path: 'echontillons/save', component: SaveEchontillonComponent, canActivate:[AuthentificationGuardService], data: {role:['Technicien', 'Responsable']} },
    { path: 'echontillons', component: EchontillonsComponent, canActivate:[AuthentificationGuardService], data: {role:['Admin','Technicien', 'Responsable']} },
    { path: 'echontillons/update/:id', component: UpdateEchontillonComponent, canActivate:[AuthentificationGuardService], data: {role:['Technicien', 'Responsable']}},
    { path: 'echontillon-materials', component: EchontillonMaterialsComponent, canActivate:[AuthentificationGuardService], data: {role:['Admin','Technicien', 'Responsable']}},
    { path: 'echontillon-materials/save', component: SaveEchontillonMaterialsComponent, canActivate:[AuthentificationGuardService], data: {role:['Technicien', 'Responsable']}},
    { path: 'echontillon-materials/update/:id', component: UpdateEchontillonMaterialsComponent, canActivate:[AuthentificationGuardService], data: {role:['Technicien', 'Responsable']}},
  ]},

  { path: 'auth', component: AuthentificationComponent},
  { path: '', redirectTo: 'auth', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
