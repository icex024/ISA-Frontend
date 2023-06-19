import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../model/appointment';
import { Observable } from 'rxjs';
import { UserAppointmentAdd } from '../model/addAppointmentByUser';
import { AuthService } from './auth.service';
import { ShowAppointments } from '../model/showAppointments';
import { CreateExaminationReportDto } from '../model/createExaminationReportDto';
import { FreeAppointment } from '../model/freeAppointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  apiHost: string = 'http://localhost:8081/api/appointment/'
  token = this.authService.getToken();
  //headers: HttpHeaders = new HttpHeaders({ 'Content-Type' : 'application/json'})
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`).set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private authService: AuthService) { }

  
  // Set the token in the request header
   

  createAppointment(appointment : Appointment): Observable<Appointment> {
    //console.log('usao')
    //console.log(this.headers.getAll('Authorization'));
    return this.http.post<Appointment>(this.apiHost+'create-predefined', appointment, {headers: this.headers});
  }

  createAppointmenByUser(appointment : UserAppointmentAdd): Observable<any> {
    return this.http.post<any>(this.apiHost+'create-appointment-by-user', appointment, {headers: this.headers});
  }


  getAllAppointmentsByCenter(keyword: string):Observable<ShowAppointments[]>{
    return this.http.get<ShowAppointments[]>(this.apiHost+'get-appointment-by-center?keyword='+keyword,{headers: this.headers})
  }

  public fake:string=""
  givePenalty(username:string): Observable<any> {
    console.log(this.apiHost+'give-penalty/'+username)
    
    return this.http.post<string>(this.apiHost+'give-penalty/'+username,this.fake ,{headers: this.headers})
  
    
  }

  createExaminationReport(report: CreateExaminationReportDto, appId: string)  {
    console.log(this.headers.getAll('Authorization'));
    console.log(appId);
    return this.http.post<CreateExaminationReportDto>(this.apiHost+'conclude-examination/'+appId, report, { headers: this.headers });
  }

  getAllAppointmentsByUser():Observable<ShowAppointments[]>{
    return this.http.get<ShowAppointments[]>(this.apiHost+'get-appointment-by-user',{headers: this.headers})
  }


  getAllReportByUser():Observable<CreateExaminationReportDto[]>{
    return this.http.get<CreateExaminationReportDto[]>(this.apiHost+'get-examination-report',{headers: this.headers})
  }

  getFreeAppointmentsByCenter(centerId: string) : Observable<FreeAppointment[]>{
    return this.http.get<FreeAppointment[]>(this.apiHost+'get-free-by-center/'+centerId, {headers:this.headers});
  }

  schedulePredefined(app: FreeAppointment) : Observable<Appointment> {
    return this.http.post<Appointment>(this.apiHost+'schedule-predefined', app ,{headers:this.headers});
  }


  cancel(id:string,fake:string): Observable<any>{
    return this.http.post<any>(this.apiHost+'cancel/'+id,fake,{headers:this.headers});
  }
}
