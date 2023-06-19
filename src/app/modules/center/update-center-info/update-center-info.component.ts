import { Component, OnInit, ViewChild } from '@angular/core';
import { Center } from '../../model/center';
import { CenterService } from '../../services/center.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-update-center-info',
  templateUrl: './update-center-info.component.html',
  styleUrls: ['./update-center-info.component.css']
})
export class UpdateCenterInfoComponent implements OnInit {

  public center: Center = new Center();


  constructor(private centerService: CenterService,  private formBuilder: FormBuilder,
    private route: ActivatedRoute) {  
   
  }

  updateForm = this.formBuilder.group({
    name: '',
    address: '',
    city: '',
    state: '',
    rating: '',
    description: '',
    workStart: '',
    workEnd: ''
  });

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.centerService.getById().subscribe((res) => {
        this.center = res;
        
        this.updateForm.controls['name'].setValue(this.center.name);
        this.updateForm.controls['address'].setValue(this.center.address);
        this.updateForm.controls['city'].setValue(this.center.city);
        this.updateForm.controls['state'].setValue(this.center.state);
        this.updateForm.controls['description'].setValue(this.center.description);
        this.updateForm.controls['rating'].setValue(this.center.rating);
        this.updateForm.controls['workStart'].setValue(this.center.workStart.toString());
        this.updateForm.controls['workEnd'].setValue(this.center.workEnd.toString());
    });
    });
    
  }

  updateInfo(): void {
    this.center.address = this.updateForm.controls['address'].value? this.updateForm.controls['address'].value : '';
    this.center.description = this.updateForm.controls['description'].value? this.updateForm.controls['description'].value : '';

    this.centerService.updateCenterInfo(this.center).subscribe();
  }

}
