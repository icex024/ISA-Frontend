import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';
import { FreeAppointment } from '../model/freeAppointment';

@Component({
  selector: 'app-free-center-appointments',
  templateUrl: './free-center-appointments.component.html',
  styleUrls: ['./free-center-appointments.component.css']
})
export class FreeCenterAppointmentsComponent implements OnInit {

  centerId: string;
  centerName: string;
  appointments: FreeAppointment[] = [];

  constructor(private appointmentService : AppointmentService, private activatedRoute : ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.centerId = this.activatedRoute.snapshot.paramMap.get("id");
    this.centerName = this.activatedRoute.snapshot.paramMap.get("name");

    this.appointmentService.getFreeAppointmentsByCenter(this.centerId).subscribe(res => {this.appointments=res;});
    console.log(this.appointments);
  }

  schedule(app : FreeAppointment){
    console.log(app)
    this.appointmentService.schedulePredefined(app).subscribe();
    this.router.navigate(['/user-appointments']);
  }

}
