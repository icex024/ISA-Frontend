import { Component, OnInit } from '@angular/core';
import { CreateExaminationReportDto } from '../model/createExaminationReportDto';
import { ShowReportRegular } from '../model/showReportRegular';
import { compareDesc, formatISO } from 'date-fns';
import { AppointmentService } from '../services/appointment.service';


const arrayDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {

  public listOfDates: string[]=[]
  public listOfDatesRegular: {date,dateString,dayOfWeek}[]=[]

  public listOfReports: CreateExaminationReportDto []=[]
  public startList:ShowReportRegular[]=[]
  public listToShow: ShowReportRegular[]=[]

  constructor(private appointmentService:AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getAllReportByUser().subscribe(res=>{
      this.listOfReports=res;
      this.listOfReports.forEach((app)=>{
        const startString = app.start.toString().split(",")
        const endString =app.end.toString().split(",")
        this.startList.push({
         
          bloodQuantity: app.bloodQuantity,
          punctureArm: app.punctureArm,
          hemoglobin:app.hemoglobin,
          hematocrit:app.hematocrit,
          start: formatISO(new Date(Number(startString[0]),Number(startString[1]) - 1,Number(startString[2]),Number(startString[3]),Number(startString[4]),Number(startString[5])), { representation: 'date' }),
          end: formatISO(new Date(Number(endString[0]),Number(endString[1]) - 1,Number(endString[2]),Number(endString[3]),Number(endString[4]),Number(endString[5])), { representation: 'date' }),
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

}