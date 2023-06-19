import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CenterAdmin } from '../model/centerAdmin';
import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Employee } from '../model/employee';



@Injectable({
  providedIn: 'root'
})
export class CenterAdminService {

  apiHost: string = 'http://localhost:8081/api';

  token = this.authService.getToken();
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`).set('Content-Type', 'application/json');

  constructor(private http: HttpClient,private authService:AuthService) { }

  getById(adminId: string): Observable<CenterAdmin>{
    
    return this.http.get<CenterAdmin>(this.apiHost+'/admin/get-admin', {headers: this.headers});
  }

  updateAdminInfo(admin : any): Observable<any> {
    return this.http.post<any>(this.apiHost+'/admin/update-admin', admin, { headers: this.headers });
  }

  changePassword(id: number, newPassword: string) :Observable<any> {
    return this.http.post<any>(this.apiHost+'/admin/change-password', newPassword,  { headers: this.headers });
  }

  getCenterEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiHost+'/admin/center-employees', {headers: this.headers});
  }


}
