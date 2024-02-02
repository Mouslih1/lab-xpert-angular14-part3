import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { UsersComponent } from './users/components/users/users.component';
import { SaveUserComponent } from './users/components/save-user/save-user.component';
import { UpdateUserComponent } from './users/components/update-user/update-user.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'users', component:UsersComponent},
  {path: 'users/save', component:SaveUserComponent},
  {path: 'users/id/:id', component:UpdateUserComponent},
  

  { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
