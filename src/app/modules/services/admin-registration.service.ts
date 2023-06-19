import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AdminRegistrationDto } from '../model/adminRegistrationDto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminRegistrationService {

  apiHost: string = 'http://localhost:8081/api/admin'
  token = this.authService.getToken();
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient,private authService:AuthService) { }

    createAdmin(adminRegistrationDto: any): Observable<any> {
      return this.http.post<any>(this.apiHost+'/create-admin' ,adminRegistrationDto,{headers: this.headers}).pipe(catchError(this.errorHandler))
    }
    errorHandler(error: HttpErrorResponse){
      return throwError(() => new Error('test'))
    }
}
