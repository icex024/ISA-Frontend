import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Credentials } from '../model/credentials';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenDTO } from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:8081/api/auth/login';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  LogIn(credentials: Credentials) : Observable<TokenDTO> {
    
    return this.http.post<TokenDTO>(this.authUrl, credentials, this.httpOptions);
  }

  isLoggedIn() {
    const token = this.getToken();
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
    return false;
  }

  private decodeToken() {
    const token = this.getToken();
    if(token)
      return this.jwtHelper.decodeToken(token);
  }

  getAuthorities() {
    const decodedToken = this.decodeToken();
    return decodedToken.authorities;
  }

  getUsername(){
    const decodedToken = this.decodeToken();
    return decodedToken.sub;
  }

  getId(){
    const decodedToken = this.decodeToken()
    return decodedToken.nameid
  }

  getToken(){
    return localStorage.getItem("jwt");
  }

  storeToken(token: string){
    localStorage.setItem("jwt", token); 
  }

  logOut(){
    localStorage.removeItem("jwt");
  }
}
