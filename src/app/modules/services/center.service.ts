import { ShowCentersDTO } from './../model/showCentersDTO';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Center } from '../model/center';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class CenterService{
  apiHost: string = 'http://localhost:8081/'

  token = this.authService.getToken();
  headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);

  constructor(private http: HttpClient,private authService : AuthService) { }

  getAllCenters(): Observable<ShowCentersDTO[]>{
    return this.http.get<ShowCentersDTO[]>(this.apiHost + 'api/center/getAll',{headers: this.headers})
  }

  getById(): Observable<any>{  
    return this.http.get<any>(this.apiHost+'api/center/get-center', {headers: this.headers});
  }

  getSearchedAndFilteredCenters(search: string,type: string,filter: string): Observable<ShowCentersDTO[]>{
    return this.http.get<ShowCentersDTO[]>(this.apiHost + 'api/center/searchAndFilter?searchContent=' + search + '&filterType=' + type + '&filterContent=' + filter,{headers: this.headers})
  }

  updateCenterInfo(center : any): Observable<any> {
    
    return this.http.post<any>(this.apiHost+'api/center/update-center', center, { headers: this.headers });
  }

  getAllCentersByDate(date: any): Observable<ShowCentersDTO[]>{
    return this.http.get<ShowCentersDTO[]>(this.apiHost + 'api/center/freeCenterByDate?dateTime='+date,{headers: this.headers})
  }
}
