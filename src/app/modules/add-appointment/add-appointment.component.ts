import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/appointment';
import { AppointmentService } from '../services/appointment.service';
import { CenterAdminService } from '../services/center-admin.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  constructor(private appointmentService : AppointmentService, private centerAdminService : CenterAdminService) { }

  appointment : Appointment = new Appointment();
  employees : Employee[] = [];
  selectedIds : string[] = [];
  selectedNames : string [] = [];

  ngOnInit(): void {
    this.centerAdminService.getCenterEmployees().subscribe(
      res => {
        this.employees = res;
      }
    );

  }

  create() {
    //console.log(this.appointment);
    this.appointment.staffIds = this.selectedIds;
    this.appointmentService.createAppointment(this.appointment).subscribe();
  }

  remove(employee: Employee) {
    const mainListIndex = this.findEmployeeIndex(employee, this.employees);
    this.employees[mainListIndex].added = false;

    const tempListIndex = this.selectedIds.indexOf(employee.id);

    this.selectedIds.splice(tempListIndex, 1);
    this.selectedNames.splice(tempListIndex, 1);
  }

  add(employee: Employee) {
    this.selectedIds.push(employee.id);
    this.selectedNames.push(employee.fullName);
    const index = this.findEmployeeIndex(employee, this.employees);
    this.employees[index].added = true;
  }

  findEmployeeIndex(employee: Employee, employees: Employee[]): number {
    return employees.findIndex(e => e.id === employee.id);
  }


}
