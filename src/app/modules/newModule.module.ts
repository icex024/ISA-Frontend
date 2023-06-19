import { MatTableModule } from '@angular/material/table';
import { CommonModule } from "@angular/common";
import {  CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule,Routes } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { ShowCentersComponent } from "./show-centers/show-centers.component";
import { HomeUnregisteredComponent } from './home-unregistered/home-unregistered.component';
import { LoginComponent } from './login/login.component';
import { SignupRegularComponent } from './signup-regular/signup-regular.component';
import { AddAppointmentComponent } from './add-appointment/add-appointment.component';
import { EdituserComponent } from './edituser/edituser.component';

import { ExaminationReportComponent } from './examination-report/examination-report.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { UserAppointmentsComponent } from './user-appointments/user-appointments.component';
import { UserHistoryComponent } from './user-history/user-history.component';
=======
import { UserComplaintsComponent } from './user-complaints/user-complaints.component';
import { UnansweedComplaintsComponent } from './unansweed-complaints/unansweed-complaints.component';
import { ResolveAppointmentComponent } from './resolve-appointment/resolve-appointment.component';
<<<<<<< HEAD
>>>>>>> 803426d (progress)
=======
import { ResolveComplaintComponent } from './resolve-complaint/resolve-complaint.component';
import { AdminComplaintsComponent } from './admin-complaints/admin-complaints.component';
import { FreeCenterAppointmentsComponent } from './free-center-appointments/free-center-appointments.component';
>>>>>>> 26e5dcc (progress)
=======
import { UserComplaintsComponent } from './user-complaints/user-complaints.component';
import { UnansweedComplaintsComponent } from './unansweed-complaints/unansweed-complaints.component';
import { ResolveAppointmentComponent } from './resolve-appointment/resolve-appointment.component';
import { ResolveComplaintComponent } from './resolve-complaint/resolve-complaint.component';
import { AdminComplaintsComponent } from './admin-complaints/admin-complaints.component';
import { FreeCenterAppointmentsComponent } from './free-center-appointments/free-center-appointments.component';
>>>>>>> 2fdcd9fde472cebf8a93679cceab3d6a874d0193
// import { BloodBankCardComponent } from './blood-bank-card/blood-bank-card.component';

const routes: Routes = [
  //{ path: 'editRegisteredUser/:id', component : EditRegisteredUserComponent},
  // { path: 'showCenters', component : ShowCentersComponent}
]

@NgModule({
  declarations: [
  
  
    UserComplaintsComponent,
           UnansweedComplaintsComponent,
           ResolveAppointmentComponent,
           ResolveComplaintComponent,
           AdminComplaintsComponent,
           FreeCenterAppointmentsComponent
  ],
  imports:[
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    MatTableModule
  ],
  exports:[RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class NewModuleModule { }