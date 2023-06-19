import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpdateCenterAdminProfileComponent } from './modules/center-admin/update-center-admin-profile/update-center-admin-profile.component';
import { MaterialModule } from "./material/material.module";
import { HttpClientModule } from "@angular/common/http";
import { ShowCentersComponent } from './modules/show-centers/show-centers.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UpdateCenterInfoComponent } from './modules/center/update-center-info/update-center-info.component';
import { ShowUsersComponent } from './modules/show-users/show-users.component';
import { SearchComponent } from './modules/search/search.component';
import { CenterRegistrationComponent } from './modules/center-registration/center-registration.component';
import { AdminRegistrationComponent } from './modules/admin-registration/admin-registration.component';
import { SearchAndFilterCentersComponent } from './modules/search-and-filter-centers/search-and-filter-centers.component';
import { HomeUnregisteredComponent } from './modules/home-unregistered/home-unregistered.component';
import { AuthGuard } from './modules/guard/auth.guard';
import { LoginComponent } from './modules/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { SignupRegularComponent } from './modules/signup-regular/signup-regular.component';
import { AddAppointmentComponent } from './modules/add-appointment/add-appointment.component';
import { AddAppointmentByUserComponent } from './modules/add-appointment-by-user/add-appointment-by-user.component';
import {Sort, MatSortModule} from '@angular/material/sort';
import { EdituserComponent } from './modules/edituser/edituser.component';
import { SurveyComponent } from './modules/survey/survey.component';
import { CenterAppointmentsComponent } from './modules/center-appointments/center-appointments.component';
import { ExaminationReportComponent } from './modules/examination-report/examination-report.component';
import { CreateComplaintComponent } from './modules/create-complaint/create-complaint.component';
import { TestPageComponent } from './modules/test-page/test-page.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { HomePageUserComponent } from './modules/home-page-user/home-page-user.component';
import { HomePageCenterAdminComponent } from './modules/home-page-center-admin/home-page-center-admin.component';
import { ShowCentersPageComponent } from './modules/show-centers-page/show-centers-page.component';
import { UserAppointmentsComponent } from './modules/user-appointments/user-appointments.component';
import { UserHistoryComponent } from './modules/user-history/user-history.component';
import { HomePageSystemAdminComponent } from './modules/home-page-system-admin/home-page-system-admin.component';
import { MapComponent } from './modules/map/map.component';
import { UserComplaintsComponent } from './modules/user-complaints/user-complaints.component';
import { ResolveComplaintComponent } from './modules/resolve-complaint/resolve-complaint.component';
import { FreeCenterAppointmentsComponent } from './modules/free-center-appointments/free-center-appointments.component';
import { UnansweedComplaintsComponent } from './modules/unansweed-complaints/unansweed-complaints.component';



const routes: Routes = [
  { path: 'showCenters', component : ShowCentersComponent}
]

export function tokenGetter() { 
  return localStorage.getItem("jwt"); 
}

@NgModule({
  declarations: [
    AppComponent,
    ShowCentersComponent,
    UpdateCenterAdminProfileComponent,
    UpdateCenterAdminProfileComponent,
    UpdateCenterInfoComponent,
    ShowUsersComponent,
    SearchComponent,
    CenterRegistrationComponent,
    AdminRegistrationComponent,
    SearchAndFilterCentersComponent,
    HomeUnregisteredComponent,
    LoginComponent,
    SignupRegularComponent,
    AddAppointmentComponent,
    AddAppointmentByUserComponent,
    EdituserComponent,
    SurveyComponent,
    CenterAppointmentsComponent,
    ExaminationReportComponent,
    CreateComplaintComponent,
    TestPageComponent,
    SidebarComponent,
    HomePageUserComponent,
    HomePageCenterAdminComponent,
    ShowCentersPageComponent,
    UserAppointmentsComponent,
    UserHistoryComponent,
    HomePageSystemAdminComponent,
    MapComponent,
    UserComplaintsComponent,
    UnansweedComplaintsComponent,
    ResolveComplaintComponent,
    FreeCenterAppointmentsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,  
    MatSortModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }