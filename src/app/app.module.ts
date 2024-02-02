import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { PatientsComponent } from './patients/components/patients/patients.component';
import { SavePatientComponent } from './patients/components/save-patient/save-patient.component';
import { UpdatePatientComponent } from './patients/components/update-patient/update-patient.component';
import { PatientComponent } from './patients/services/patient/patient.component';
import { UsersComponent } from './users/components/users/users.component';
import { SaveUserComponent } from './users/components/save-user/save-user.component';
import { UpdateUserComponent } from './users/components/update-user/update-user.component';
import { FournisseursComponent } from './fournisseurs/components/fournisseurs/fournisseurs.component';
import { SaveFournisseurComponent } from './fournisseurs/components/save-fournisseur/save-fournisseur.component';
import { UpdateFournisseurComponent } from './fournisseurs/components/update-fournisseur/update-fournisseur.component';
import { MaterialsComponent } from './materials/components/materials/materials.component';
import { SaveMaterialComponent } from './materials/components/save-material/save-material.component';
import { UpdateMaterialComponent } from './materials/components/update-material/update-material.component';
import { EchontillonsComponent } from './echontillons/components/echontillons/echontillons.component';
import { SaveEchontillonComponent } from './echontillons/components/save-echontillon/save-echontillon.component';
import { UpdateEchontillonComponent } from './echontillons/components/update-echontillon/update-echontillon.component';
import { EchontillonMaterialsComponent } from './echontillon-materials/components/echontillon-materials/echontillon-materials.component';
import { SaveEchontillonMaterialsComponent } from './echontillon-materials/components/save-echontillon-materials/save-echontillon-materials.component';
import { UpdateEchontillonMaterialsComponent } from './echontillon-materials/components/update-echontillon-materials/update-echontillon-materials.component';
import { AnalysesComponent } from './analyses/components/analyses/analyses.component';
import { SaveAnalyseComponent } from './analyses/components/save-analyse/save-analyse.component';
import { UpdateAnalyseComponent } from './analyses/components/update-analyse/update-analyse.component';
import { SousAnalysesComponent } from './sous-analyses/components/sous-analyses/sous-analyses.component';
import { SaveSousAnalyseComponent } from './sous-analyses/components/save-sous-analyse/save-sous-analyse.component';
import { UpdateSousAnalyseComponent } from './sous-analyses/components/update-sous-analyse/update-sous-analyse.component';
import { ReactifsComponent } from './reactifs/components/reactifs/reactifs.component';
import { SaveReactifComponent } from './reactifs/components/save-reactif/save-reactif.component';
import { UpdateReactifComponent } from './reactifs/components/update-reactif/update-reactif.component';
import { ResultsComponent } from './results/components/results/results.component';
import { SaveResultComponent } from './results/components/save-result/save-result.component';
import { UpdateResultComponent } from './results/components/update-result/update-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientsComponent,
    SavePatientComponent,
    UpdatePatientComponent,
    PatientComponent,
    UsersComponent,
    SaveUserComponent,
    UpdateUserComponent,
    FournisseursComponent,
    SaveFournisseurComponent,
    UpdateFournisseurComponent,
    MaterialsComponent,
    SaveMaterialComponent,
    UpdateMaterialComponent,
    EchontillonsComponent,
    SaveEchontillonComponent,
    UpdateEchontillonComponent,
    EchontillonMaterialsComponent,
    SaveEchontillonMaterialsComponent,
    UpdateEchontillonMaterialsComponent,
    AnalysesComponent,
    SaveAnalyseComponent,
    UpdateAnalyseComponent,
    SousAnalysesComponent,
    SaveSousAnalyseComponent,
    UpdateSousAnalyseComponent,
    ReactifsComponent,
    SaveReactifComponent,
    UpdateReactifComponent,
    ResultsComponent,
    SaveResultComponent,
    UpdateResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
