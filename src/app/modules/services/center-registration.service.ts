
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';
import { CenterRegistrationDto } from '../model/centerRegistrationDto';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class CenterRegistrationService {

    token = this.authService.getToken();
    apiHost: string = 'http://localhost:8081/api/center'
    headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  

    constructor(private http: HttpClient, private authService:AuthService) { }

    createCenter(centerRegistrationDto: CenterRegistrationDto): Observable<CenterRegistrationDto> {
      return this.http.post<CenterRegistrationDto>(this.apiHost+'/create-centar' ,centerRegistrationDto,{headers: this.headers})
    }
}