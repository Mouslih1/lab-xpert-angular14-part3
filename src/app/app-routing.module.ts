import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { PatientsComponent } from './patients/components/patients/patients.component';
import { SavePatientComponent } from './patients/components/save-patient/save-patient.component';
import { UpdatePatientComponent } from './patients/components/update-patient/update-patient.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'patients', component: PatientsComponent},
  { path: 'patients/save', component: SavePatientComponent},
  { path: 'patients/update/:id', component: UpdatePatientComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
