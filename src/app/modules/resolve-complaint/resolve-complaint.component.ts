import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplaintService } from '../services/complaint.service';
import { Complaint } from '../model/complaint';
import { ComplaintAnswerDto } from '../model/complaintAnswer';

@Component({
  selector: 'app-resolve-complaint',
  templateUrl: './resolve-complaint.component.html',
  styleUrls: ['./resolve-complaint.component.css']
})
export class ResolveComplaintComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute, private complaintService : ComplaintService) { }

  complaint: Complaint;
  complaintId: string;

  ngOnInit(): void {
      this.complaintId = this.activatedRoute.snapshot.paramMap.get("id");
      this.complaintService.getComplaint(this.complaintId).subscribe(
        res =>
        {
          this.complaint = res;
        }
      );

  }

  submitResponse() {
    const complaintAnswer: ComplaintAnswerDto = {
      answer: this.complaint.answer,
      complaintId: this.complaint.id
    };
    this.complaintService.resolve(complaintAnswer).subscribe(
      res => {
        console.log(res);
      }
    );
  }



}
