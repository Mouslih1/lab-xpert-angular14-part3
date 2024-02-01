import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { PatientsComponent } from './patients/components/patients/patients.component';
import { SavePatientComponent } from './patients/components/save-patient/save-patient.component';
import { UpdatePatientComponent } from './patients/components/update-patient/update-patient.component';
import { EchontillonsComponent } from './echontillons/components/echontillons/echontillons.component';
import { EchontillonAnalysesComponent } from './echontillons/components/echontillon-analyses/echontillon-analyses.component';
import { SaveEchontillonComponent } from './echontillons/components/save-echontillon/save-echontillon.component';
import { UpdateEchontillonComponent } from './echontillons/components/update-echontillon/update-echontillon.component';
import { EchontillonMaterialsComponent } from './echontillon-materials/components/echontillon-materials/echontillon-materials.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'patients', component: PatientsComponent},
  { path: 'patients/save', component: SavePatientComponent},
  { path: 'patients/update/:id', component: UpdatePatientComponent},
  { path: 'echontillons/echontillon-analyses/:id', component: EchontillonAnalysesComponent},
  { path: 'echontillons/save', component: SaveEchontillonComponent},
  { path: 'echontillons', component: EchontillonsComponent},
  { path: 'echontillons/update/:id', component: UpdateEchontillonComponent},
  { path: 'echontillon-materials', component: EchontillonMaterialsComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
