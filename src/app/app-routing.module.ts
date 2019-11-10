import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent} from './home/home.component';
import { AdmissionComponent } from './admission/admission.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {StudentdetailsComponent} from './studentdetails/studentdetails.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Admission', component: AdmissionComponent },
  { path: 'Dashboard', component: DashboardComponent },
  {path: 'Studentdetails/:heroID', component: StudentdetailsComponent},
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
