import { EditRegisteredUser } from './../model/editRegisteredUser';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { RegisteredUser } from '../model/registeredUser';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisteredUserService {
  apiHost: string = 'http://localhost:8081/';
  usersUrl : string = 'http://localhost:8081/api/registeredUsers/'
  token = this.authService.getToken()
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`).set('Content-Type', 'application/json');

  constructor(private http: HttpClient,private authService : AuthService) { }

  getRegisteredUserForEdit(): Observable<EditRegisteredUser> {
    console.log('uso')
    return this.http.get<EditRegisteredUser>(this.apiHost + "api/registeredUsers/getUser",{headers: this.headers})
  }

  editRegisteredUser(user: any): Observable<any>{
    return this.http.post<any>(this.apiHost + 'api/registeredUsers/update-user', user, {headers : this.headers})
  }

  register(user: RegisteredUser) : Observable<RegisteredUser> {
    return this.http.post<RegisteredUser>(this.usersUrl + 'registerUser', user, {headers : this.headers});
  }
}