import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CreateComplaintComponent } from '../create-complaint/create-complaint.component';
import { CreateComplaintDto } from '../model/createComplaint';
import { Observable } from 'rxjs';
import { ComplaintEntity } from '../model/complaintEntity';
import { ComplaintAnswerDto } from '../model/complaintAnswer';
import { Complaint } from '../model/complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
    apiHost: string = 'http://localhost:8081/api/complaint/'
    
    token = this.authService.getToken(); 
  
    headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`).set('Content-Type', 'application/json').set('Access-Control-Allow-Origin','*');
  
    constructor(private http: HttpClient,private authService:AuthService) { }

    create(createComplaintDto : CreateComplaintDto) : Observable<CreateComplaintDto>{
      return this.http.post<CreateComplaintDto>(this.apiHost+'create-complaint', createComplaintDto, {headers: this.headers});
    }

    getEntities() : Observable<ComplaintEntity[]>{
      return this.http.get<ComplaintEntity[]>(this.apiHost+'complaint-entities', {headers: this.headers});     
    }

    resolve(complaintAnswer: ComplaintAnswerDto) : Observable<ComplaintAnswerDto> {
      console.log(complaintAnswer);
      console.log(this.token)
      return this.http.post<any>(this.apiHost+'resolve-complaint', complaintAnswer, {headers: this.headers});
    }

    getUserComplaints() : Observable<Complaint[]>{
      return this.http.post<Complaint[]>(this.apiHost+'user-complaints', {headers: this.headers})
    }

    getUnanswered() : Observable<Complaint[]> {
      return this.http.get<Complaint[]>(this.apiHost+'get-unanswered', {headers:this.headers});
    }

    getComplaint(complaintId: string) : Observable<Complaint>{
      return this.http.get<Complaint>(this.apiHost+'get-complaint/'+complaintId, {headers: this.headers});
    }

    getComplaintsByAmin() : Observable<Complaint[]> {
      return this.http.get<Complaint[]>(this.apiHost+'complaints-by-admin', {headers:this.headers});
    }
}
