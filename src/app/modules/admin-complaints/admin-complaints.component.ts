import { Component, OnInit } from '@angular/core';
import { Complaint } from '../model/complaint';
import { ComplaintService } from '../services/complaint.service';

@Component({
  selector: 'app-admin-complaints',
  templateUrl: './admin-complaints.component.html',
  styleUrls: ['./admin-complaints.component.css']
})
export class AdminComplaintsComponent implements OnInit {

  complaints : Complaint[] = [];
 

  constructor(private complaintService : ComplaintService) { }

  ngOnInit(): void {
   this.complaintService.getComplaintsByAmin().subscribe(
    res => {
      this.complaints = res;
    }
   );
  }

  

}
