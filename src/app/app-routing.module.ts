import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminRegistrationComponent } from './modules/admin-registration/admin-registration.component';
import { UpdateCenterAdminProfileComponent } from './modules/center-admin/update-center-admin-profile/update-center-admin-profile.component';
import { CenterRegistrationComponent } from './modules/center-registration/center-registration.component';
import { UpdateCenterInfoComponent } from './modules/center/update-center-info/update-center-info.component';
import { ShowUsersComponent } from './modules/show-users/show-users.component';
import { ShowCentersComponent } from './modules/show-centers/show-centers.component';
import { HomeUnregisteredComponent } from './modules/home-unregistered/home-unregistered.component';
import { LoginComponent } from './modules/login/login.component';
import { SignupRegularComponent } from './modules/signup-regular/signup-regular.component'; 
import { AddAppointmentComponent } from './modules/add-appointment/add-appointment.component';
import { AddAppointmentByUserComponent } from './modules/add-appointment-by-user/add-appointment-by-user.component';
import { AuthGuard } from './modules/guard/auth.guard';
import { EditRegisteredUser } from './modules/model/editRegisteredUser';
import { EdituserComponent } from './modules/edituser/edituser.component';
import { SurveyComponent } from './modules/survey/survey.component';
import { CenterAppointmentsComponent } from './modules/center-appointments/center-appointments.component';
import { ExaminationReportComponent } from './modules/examination-report/examination-report.component';
import { CreateComplaintComponent } from './modules/create-complaint/create-complaint.component';
import { TestPageComponent } from './modules/test-page/test-page.component';
import { HomePageUserComponent } from './modules/home-page-user/home-page-user.component';
import { HomePageCenterAdminComponent } from './modules/home-page-center-admin/home-page-center-admin.component';
import { ShowCentersPageComponent } from './modules/show-centers-page/show-centers-page.component';
import { UserAppointmentsComponent } from './modules/user-appointments/user-appointments.component';
import { UserHistoryComponent } from './modules/user-history/user-history.component';
import { HomePageSystemAdminComponent } from './modules/home-page-system-admin/home-page-system-admin.component';
import { UserComplaintsComponent } from './modules/user-complaints/user-complaints.component';
import { UnansweedComplaintsComponent } from './modules/unansweed-complaints/unansweed-complaints.component';
import { ResolveComplaintComponent } from './modules/resolve-complaint/resolve-complaint.component';
import { AdminComplaintsComponent } from './modules/admin-complaints/admin-complaints.component';
import { FreeCenterAppointmentsComponent } from './modules/free-center-appointments/free-center-appointments.component';


const routes: Routes = [
  { path: '', redirectTo: '/home-unregistered', pathMatch: 'full'},
  { path: 'center-admin-profile', component: UpdateCenterAdminProfileComponent, canActivate: [AuthGuard], data: {authorities: ['ROLE_CENTER_ADMIN']}},
  { path: 'center', component: UpdateCenterInfoComponent},
  { path: 'registered-users', component: ShowUsersComponent},
  { path: 'center-registration', component: CenterRegistrationComponent, canActivate: [AuthGuard], data: {authorities: ['ROLE_CENTER_ADMIN']}},
  { path: 'admin-registration', component: AdminRegistrationComponent},
  { path: 'home-unregistered', component: HomeUnregisteredComponent},
  { path: 'login', component: LoginComponent},
  { path:'signup-regular', component: SignupRegularComponent},
  { path:'create-appointment-by-user', component : AddAppointmentByUserComponent,canActivate: [AuthGuard], data: {roles: ['ROLE_USER']}},
  { path:'editRegisteredUser', component : EdituserComponent},
  { path:'create-appointment', component : AddAppointmentComponent, canActivate: [AuthGuard], data: {authorities: ['ROLE_CENTER_ADMIN']}},
  { path:'survey', component : SurveyComponent},
  { path:'all-appointment-by-center', component : CenterAppointmentsComponent, canActivate: [AuthGuard], data: {authorities: ['ROLE_CENTER_ADMIN']}},
  { path: 'create-complaint', component: CreateComplaintComponent, canActivate: [AuthGuard], data: {authorities: ['ROLE_USER']}},
  { path: 'examination-report/:appId/:canDonate', component : ExaminationReportComponent, canActivate: [AuthGuard], data: {authorities: ['ROLE_CENTER_ADMIN']}},
  { path: 'test-page', component:TestPageComponent},
  { path: 'editRegisteredUser/:id', component : EditRegisteredUser},
  { path: 'home-page-user', component:HomePageUserComponent,canActivate: [AuthGuard], data: {authorities: ['ROLE_USER']}},
  { path: 'home-page-center-admin', component:HomePageCenterAdminComponent,canActivate: [AuthGuard], data: {authorities: ['ROLE_CENTER_ADMIN']}},
  { path: 'show-centers', component : ShowCentersPageComponent},
  { path: 'center-info',component: UpdateCenterInfoComponent, canActivate: [AuthGuard], data: {authorities:['ROLE_CENTER_ADMIN']}},
  { path: 'user-appointments', component:UserAppointmentsComponent,canActivate: [AuthGuard], data: {authorities: ['ROLE_USER']}},
  { path: 'user-history', component:UserHistoryComponent,canActivate: [AuthGuard], data: {authorities: ['ROLE_USER']}},
  { path: 'add-center',component: CenterRegistrationComponent, canActivate: [AuthGuard], data: {authorities:['ROLE_SYSTEM_ADMIN']}},
  { path: 'home-page-system-admin', component:HomePageSystemAdminComponent,canActivate: [AuthGuard], data: {authorities: ['ROLE_SYSTEM_ADMIN']}},
  { path: 'add-admin',component: AdminRegistrationComponent, canActivate: [AuthGuard], data: {authorities:['ROLE_SYSTEM_ADMIN']}},
  { path: 'user-complaints', component: UserComplaintsComponent,canActivate: [AuthGuard], data: {authorities: ['ROLE_USER']}},
  { path: 'unanswered-complaints', component: UnansweedComplaintsComponent, canActivate: [AuthGuard], data: {authorities:['ROLE_SYSTEM_ADMIN']}},
  { path: 'resolve-complaint/:id', component: ResolveComplaintComponent, canActivate: [AuthGuard], data: {authorities:['ROLE_SYSTEM_ADMIN']}},
  { path: 'admin-complaints', component: AdminComplaintsComponent, canActivate: [AuthGuard], data: {authorities:['ROLE_SYSTEM_ADMIN']}},
  { path: 'free-center-appointments/:id/:name', component:FreeCenterAppointmentsComponent, canActivate: [AuthGuard], data: {authorities: ['ROLE_USER']}}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
