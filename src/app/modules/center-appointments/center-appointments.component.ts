import { Component, OnInit } from '@angular/core';
import { ShowAppointments } from '../model/showAppointments';
import { AppointmentService } from '../services/appointment.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { compareAsc, compareDesc, endOfMonth, endOfWeek, endOfYear, formatISO, nextSunday, parseISO, previousMonday, startOfMonth, startOfWeek, startOfYear } from 'date-fns';
import { ShowAppointmentsRegular } from '../model/showAppointmentsRegular';
import { HttpStatusCode } from '@angular/common/http';

const arrayDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

@Component({
  selector: 'app-center-appointments',
  templateUrl: './center-appointments.component.html',
  styleUrls: ['./center-appointments.component.css']
})


export class CenterAppointmentsComponent implements OnInit {
  
  public listOfAppointments:ShowAppointments[]=[]
  public startList:ShowAppointmentsRegular[]=[]
  public listToShow: ShowAppointmentsRegular[]=[]
  public selectedTime: string = ""
  public selectedRange: string = ""
  public listOfDates: string[]=[]
  public listOfDatesRegular: {date,dateString,dayOfWeek}[]=[]
  public isGetPenalty: boolean=false;
  //public keyword: string = ""


  constructor(private appointmentService:AppointmentService, private router: Router) { }

  ngOnInit(): void {

    this.appointmentService.getAllAppointmentsByCenter("").subscribe(res=>{
      this.listOfAppointments=res;
      this.listOfAppointments.forEach((app)=>{
        const startString = app.start.toString().split(",")
        this.startList.push({
          id: app.id,
          centerName: app.centerName,
          userName: app.userName,
          userSurname: app.userSurname,
          userUsername: app.userUsername,
          start: formatISO(new Date(Number(startString[0]),Number(startString[1]) - 1,Number(startString[2]),Number(startString[3]),Number(startString[4]),Number(startString[5])), { representation: 'date' }),
          duration: app.duration,
          canDonate: app.canDonate,
        })
      })
      this.startList.sort((a,b)=>{
        return compareDesc(new Date(b.start),new Date(a.start))
      })
      this.listOfDates = this.startList.map((app)=> app.start)
      this.listOfDates = this.listOfDates.filter((date,index)=> this.listOfDates.findIndex((item)=> item === date) === index)
      this.listOfDatesRegular = this.listOfDates.map((date) =>  { return {date:new Date(date),dateString:date,dayOfWeek:arrayDays[new Date(date).getDay()]}})
      this.listToShow = this.startList
    })

  
  }

  ngOnChanges() {
    console.log("zju");
  }

  search(searchValue: Event){
    const keyword = (searchValue.target as HTMLSelectElement).value
    this.startList = []
    this.listToShow = []
    this.appointmentService.getAllAppointmentsByCenter(keyword).subscribe(res=>{
      console.log(res)
      this.listOfAppointments=res;
      this.listOfAppointments.forEach((app)=>{
        const startString = app.start.toString().split(",")
        if(!this.startList.find((a)=> a.id == app.id)){
          this.startList.push({
            id: app.id,
            centerName: app.centerName,
            userName: app.userName,
            userSurname: app.userSurname,
            userUsername: app.userUsername,
            start: formatISO(new Date(Number(startString[0]),Number(startString[1]) - 1,Number(startString[2]),Number(startString[3]),Number(startString[4]),Number(startString[5])), { representation: 'date' }),
            duration: app.duration,
            canDonate: app.canDonate,
          })
        }
      })
      this.startList.sort((a,b)=>{
        return compareDesc(new Date(b.start),new Date(a.start))
      })
      this.listOfDates = this.startList.map((app)=> app.start)
      this.listOfDates = this.listOfDates.filter((date,index)=> this.listOfDates.findIndex((item)=> item === date) === index)
      if(this.selectedRange === "week" && this.selectedTime !== ""){
        const firstDate = startOfWeek(parseISO(this.selectedTime), { weekStartsOn: 1 })
        const lastDate = endOfWeek(parseISO(this.selectedTime), { weekStartsOn: 1 })
        this.listToShow = this.startList.filter((app) => compareAsc(parseISO(app.start),firstDate) !== -1 && compareDesc(parseISO(app.start),lastDate) !== -1)
        this.listOfDates = this.listToShow.map((app)=> app.start)
      this.listOfDates = this.listOfDates.filter((date,index)=> this.listOfDates.findIndex((item)=> item === date) === index)
      }else if(this.selectedRange === "month" && this.selectedTime !== ""){
        const firstDate = startOfMonth(parseISO(this.selectedTime))
        const lastDate = endOfMonth(parseISO(this.selectedTime))
        this.listToShow = this.startList.filter((app) => compareAsc(parseISO(app.start),firstDate) !== -1 && compareDesc(parseISO(app.start),lastDate) !== -1)
        this.listOfDates = this.listToShow.map((app)=> app.start)
      this.listOfDates = this.listOfDates.filter((date,index)=> this.listOfDates.findIndex((item)=> item === date) === index)
      }else if(this.selectedRange === "year" && this.selectedTime !== ""){
        const firstDate = startOfYear(parseISO(this.selectedTime))
        const lastDate = endOfYear(parseISO(this.selectedTime))
        this.listToShow = this.startList.filter((app) => compareAsc(parseISO(app.start),firstDate) !== -1 && compareDesc(parseISO(app.start),lastDate) !== -1)
        this.listOfDates = this.listToShow.map((app)=> app.start)
      this.listOfDates = this.listOfDates.filter((date,index)=> this.listOfDates.findIndex((item)=> item === date) === index)
      }else{
          this.listToShow = this.startList
          this.listOfDates = this.listToShow.map((app)=> app.start)
      this.listOfDates = this.listOfDates.filter((date,index)=> this.listOfDates.findIndex((item)=> item === date) === index)
      }
    })
  }

  SetRange(){
    if(this.selectedRange === "week" && this.selectedTime !== ""){
      const firstDate = startOfWeek(parseISO(this.selectedTime), { weekStartsOn: 1 })
      const lastDate = endOfWeek(parseISO(this.selectedTime), { weekStartsOn: 1 })
      this.listToShow = this.startList.filter((app) => compareAsc(parseISO(app.start),firstDate) !== -1 && compareDesc(parseISO(app.start),lastDate) !== -1)
    }else if(this.selectedRange === "month" && this.selectedTime !== ""){
      const firstDate = startOfMonth(parseISO(this.selectedTime))
      const lastDate = endOfMonth(parseISO(this.selectedTime))
      this.listToShow = this.startList.filter((app) => compareAsc(parseISO(app.start),firstDate) !== -1 && compareDesc(parseISO(app.start),lastDate) !== -1)
    }else if(this.selectedRange === "year" && this.selectedTime !== ""){
      const firstDate = startOfYear(parseISO(this.selectedTime))
      const lastDate = endOfYear(parseISO(this.selectedTime))
      this.listToShow = this.startList.filter((app) => compareAsc(parseISO(app.start),firstDate) !== -1 && compareDesc(parseISO(app.start),lastDate) !== -1)
    }else{
      this.listToShow = this.startList
    }
  }

  StartAppointment(){
    //this.router.navigate['examination-report'];
  }

  GivePenalty(username:string){
    this.appointmentService.givePenalty(username).subscribe(res=>{
      if(HttpStatusCode.Ok)
      alert("User not show on exam and got penalty!")
      else             
      alert("This user does not exist any more!")
    })
    console.log(username)
    
  }

}
