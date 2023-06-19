import { Injectable } from '@angular/core';
import { RegisteredUser } from '../model/registeredUser';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ShowUsersService {

  apiHost: string = 'http://localhost:8081/api/registeredUsers';


  //headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json',  });
  token = this.authService.getToken(); 
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  list!: RegisteredUser[];

  constructor(private http: HttpClient,private authService:AuthService) { }

  getAll(): Observable<RegisteredUser[]>{
     
    return this.http.get<RegisteredUser[]>(this.apiHost + '/all', {headers: this.headers}).pipe(catchError(this.errorHandler));
  }
  getSearchedUsers(searchText:any): Observable<any>{
    return this.http.get<any> (this.apiHost+"/search/"+ searchText,{headers: this.headers}).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(() => new Error('test'))
  }
}
