import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../services/complaint.service';
import { CreateComplaintDto } from '../model/createComplaint';
import { ComplaintEntity } from '../model/complaintEntity';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-complaint',
  templateUrl: './create-complaint.component.html',
  styleUrls: ['./create-complaint.component.css']
})
export class CreateComplaintComponent implements OnInit {

  constructor(private complaintService: ComplaintService, private router: Router) { }

  public complaintDto : CreateComplaintDto = new CreateComplaintDto();
  complaintEntities : ComplaintEntity[] = [];
  entitySelected : boolean = false;
  selectedEntityName : string;
  userCannotComplain : boolean = false;


  ngOnInit(): void {
    this.complaintService.getEntities().subscribe(
      res => {
        this.complaintEntities = res;
        console.log(this.complaintEntities);
      }
    );
  }

  selectEntity(complaintEntity : ComplaintEntity) {
    this.complaintDto.complaintEntityId = complaintEntity.complaintEntityId;
    this.complaintDto.type = complaintEntity.type;
    this.selectedEntityName = complaintEntity.complaintEntityName;
    this.entitySelected = true;
    console.log(this.complaintDto);
  }

  assignComplaintText(target : any) {
    this.complaintDto.complaintText =  target.value;
  }

  create() : void {

    this.complaintService.create(this.complaintDto).subscribe(
      {
        next: (response: CreateComplaintDto) => {
          console.log('success');
          this.router.navigate['user-complaints'];
        },
        error : (err: HttpErrorResponse) => {
          console.log('fail');
          this.router.navigate['user-complaints'];
          console.log('ostao');
          this.userCannotComplain = true;
        }
      }
    );
  }

}
