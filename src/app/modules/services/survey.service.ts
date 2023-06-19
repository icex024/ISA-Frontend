import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Survey } from "../model/survey";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
  })
  export class SurveyService {
  
    apiHost: string = 'http://localhost:8081/api/report/'
    
    token = this.authService.getToken(); 
  
    headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  
    constructor(private http: HttpClient,private authService:AuthService) { }
  
    createSurvey(survey : Survey): Observable<Survey> {
      return this.http.post<Survey>(this.apiHost+'create-survey', survey, {headers: this.headers});
    }


    checkIfHasSurvey(): Observable<any> {
      return this.http.get<any>(this.apiHost+'has-survey-check' ,{headers: this.headers});
    }

    canDonate(username:string): Observable<any> {
      return this.http.get<any>(this.apiHost+'can-donate/'+username ,{headers: this.headers});
    }


}