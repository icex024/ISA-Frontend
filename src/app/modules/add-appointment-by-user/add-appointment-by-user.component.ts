import { Component, OnInit } from '@angular/core';
import { CenterService } from '../services/center.service';
import { UserAppointmentAdd } from '../model/addAppointmentByUser';
import { ShowCentersDTO } from '../model/showCentersDTO';
import { AppointmentService } from '../services/appointment.service';
import {Sort, MatSortModule} from '@angular/material/sort';
import { NgFor } from '@angular/common';
import { SurveyService } from '../services/survey.service';



@Component({
  selector: 'app-add-appointment-by-user',
  templateUrl: './add-appointment-by-user.component.html',
  styleUrls: ['./add-appointment-by-user.component.css']
  
})
export class AddAppointmentByUserComponent implements OnInit {
  public centerList: ShowCentersDTO[] = []
  public centerListToShow: ShowCentersDTO[] = []
  public appointment: UserAppointmentAdd = new UserAppointmentAdd
  public showCenters: boolean=false
  public sortedData: ShowCentersDTO[] = []
  public currentDate: Date
  public notHasSurvey: boolean=false;
  public check:any;


  
  constructor(private centerService:CenterService,private appointmentService: AppointmentService,private surveyService:SurveyService) {this.sortedData = this.centerListToShow.slice();}

  ngOnInit(): void {

    this.currentDate=new Date()
   this.surveyService.checkIfHasSurvey().subscribe(res=>{
      if(res==false){
        this.notHasSurvey=true;
        console.log(res)
        
      }
      else if (res==true){
        this.notHasSurvey=false;
        console.log(res)
      }
    })

    console.log(this.notHasSurvey)
    
  }

  GetCentersByDate(date:Date){
    this.centerService.getAllCentersByDate(date).subscribe(res => {
      this.centerList = res
      this.centerListToShow = this.centerList
      this.sortedData= this.centerList             
      this.showCenters=true
          
      })
           
  }
 

  ChoseCenter(id:number){
    this.appointment.centerId=id
    this.appointmentService.createAppointmenByUser(this.appointment).subscribe(res=>{
      
     
        alert("Successfully scheduled appointment")
      },error =>{
        alert("You can donate blood every 6 months")
    
    })
  }

  sortData(sort: Sort) {
    const data = this.centerListToShow.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'rating':
          return compare(parseFloat(a.rating),parseFloat( b.rating), isAsc);
      default:
        return 0;
      }
    });
  }


}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);}