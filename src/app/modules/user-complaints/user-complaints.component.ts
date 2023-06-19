import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../services/complaint.service';
import { Complaint } from '../model/complaint';

@Component({
  selector: 'app-user-complaints',
  templateUrl: './user-complaints.component.html',
  styleUrls: ['./user-complaints.component.css']
})
export class UserComplaintsComponent implements OnInit {

  constructor(private complaintService : ComplaintService) { }

  complaints: Complaint[] = [];

  ngOnInit(): void {
    this.complaintService.getUserComplaints().subscribe(
      res => {
        this.complaints = res;
      }
    );
  }




}
