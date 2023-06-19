import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { ShowAppointments } from '../model/showAppointments';
import { formatISO, compareDesc } from 'date-fns';
import { ShowAppointmentsRegular } from '../model/showAppointmentsRegular';


const arrayDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

@Component({
  selector: 'app-user-appointments',
  templateUrl: './user-appointments.component.html',
  styleUrls: ['./user-appointments.component.css']
})


export class UserAppointmentsComponent implements OnInit {

  public listOfDates: string[]=[]
  public listOfDatesRegular: {date,dateString,dayOfWeek}[]=[]

  public listOfAppointments:ShowAppointments[]=[]
  public startList:ShowAppointmentsRegular[]=[]
  public listToShow: ShowAppointmentsRegular[]=[]

  constructor(private appointmentService:AppointmentService) { }

  ngOnInit(): void {


    this.appointmentService.getAllAppointmentsByUser().subscribe(res=>{
      this.listOfAppointments=res;
      console.log(res)
      this.listOfAppointments.forEach((app)=>{
        const startString = app.start.toString().split(",")
        this.startList.push({
          id: app.id,
          centerName: app.centerName,
          userName: app.userName,
          userSurname: app.userSurname,
          userUsername: app.userUsername,
          start: formatISO(new Date(Number(startString[0]) || 0 ,Number(startString[1]) - 1 || 0 ,Number(startString[2]) || 0 ,Number(startString[3]) || 0 ,Number(startString[4]) || 0 ,Number(startString[5]) || 0 ), { representation: 'date' }),
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
  Cancel(id:string){

  this.appointmentService.cancel(id,"").subscribe();

  }



}



