import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../services/complaint.service';
import { Complaint } from '../model/complaint';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-unansweed-complaints',
  templateUrl: './unansweed-complaints.component.html',
  styleUrls: ['./unansweed-complaints.component.css']
})
export class UnansweedComplaintsComponent implements OnInit {

  complaints: Complaint[] = [];

  constructor(private complaintService : ComplaintService, private router : Router) { }

  ngOnInit(): void {
    this.complaintService.getUnanswered().subscribe(
      res => {
        this.complaints = res;
      }
    );
  }

  resolveComplaint(complaintId : number) {
    

    this.router.navigate(['resolve-complaint', complaintId]);
  }



}
