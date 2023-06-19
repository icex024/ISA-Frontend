import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateExaminationReportDto } from '../model/createExaminationReportDto';
import { AppointmentService } from '../services/appointment.service';



@Component({
  selector: 'app-examination-report',
  templateUrl: './examination-report.component.html',
  styleUrls: ['./examination-report.component.css']
})
export class ExaminationReportComponent implements OnInit {

  constructor(private router : Router, private activatedRoute : ActivatedRoute, private appointmentService : AppointmentService) { }

  appointmentId?: string;
  canDonate?: string;
  report: CreateExaminationReportDto = new CreateExaminationReportDto();

  ngOnInit(): void {
    this.canDonate=this.activatedRoute.snapshot.paramMap.get("canDonate");
    console.log(this.canDonate)
   
    this.appointmentId=this.activatedRoute.snapshot.paramMap.get("appId");

    console.log(this.appointmentId);

    if(this.canDonate=="false"){
      console.log("usao")
      this.router.navigate['/all-appointment-by-center'];
    }
  }

  submitExaminationReport() : void {
    if(this.validate()){

      this.appointmentService.createExaminationReport(this.report, this.appointmentId).subscribe(
        
      );
    }
    else return;
  }

  punctureArmChanged($event) : void {
    this.report.punctureArm = $event.target.value;
  }

  bloodGroupChange($event) : void {
    this.report.bloodGroup = $event.target.value;
  }

  validate() : boolean {


    return true;
  }







}
