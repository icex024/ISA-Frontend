import { Component, OnInit, ViewChild } from '@angular/core';
import { CenterAdmin } from '../../model/centerAdmin';
import { CenterAdminService } from '../../services/center-admin.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-center-admin-profile',
  templateUrl: './update-center-admin-profile.component.html',
  styleUrls: ['./update-center-admin-profile.component.css']
})
export class UpdateCenterAdminProfileComponent implements OnInit {

  public centerAdmin: CenterAdmin = new CenterAdmin();

  public unmatchingPasswords: String = "";

  constructor(private centerAdminService: CenterAdminService,  private formBuilder: FormBuilder,
    private route: ActivatedRoute) {  
   
  }

  updateForm = this.formBuilder.group({
    name: '',
    surname: '',
    email: '',
    address: '',
    city: '',
    state: '',
    phone: '',
    occupation: '',
    workplace: ''
  });

  changePassForm = this.formBuilder.group({
    password: '',
    passwordRepeated: ''
  });

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.centerAdminService.getById(params['id']).subscribe((res) => {
        this.centerAdmin = res;
        
        this.updateForm.controls['name'].setValue(this.centerAdmin.name);
        this.updateForm.controls['surname'].setValue(this.centerAdmin.surname);
        this.updateForm.controls['email'].setValue(this.centerAdmin.email);
        this.updateForm.controls['address'].setValue(this.centerAdmin.address);
        this.updateForm.controls['city'].setValue(this.centerAdmin.city);
        this.updateForm.controls['state'].setValue(this.centerAdmin.state);
        this.updateForm.controls['phone'].setValue(this.centerAdmin.phone);
        this.updateForm.controls['occupation'].setValue(this.centerAdmin.occupation);
        this.updateForm.controls['workplace'].setValue(this.centerAdmin.workplace);
    });
    });
    
  }

  updateInfo(): void {
    this.centerAdmin.address = this.updateForm.controls['address'].value? this.updateForm.controls['address'].value : '';
    this.centerAdmin.city = this.updateForm.controls['city'].value? this.updateForm.controls['city'].value : '';
    this.centerAdmin.state = this.updateForm.controls['state'].value? this.updateForm.controls['state'].value : '';
    this.centerAdmin.phone = this.updateForm.controls['phone'].value? this.updateForm.controls['phone'].value : '';
    this.centerAdmin.occupation = this.updateForm.controls['occupation'].value? this.updateForm.controls['occupation'].value : '';
    this.centerAdmin.workplace = this.updateForm.controls['workplace'].value? this.updateForm.controls['workplace'].value : '';

    this.centerAdminService.updateAdminInfo(this.centerAdmin).subscribe(res => {alert('Poruka')});
  }

  changePassword(): void {
    let newPass = this.changePassForm.controls['password'].value;
    let newPassConfirmed = this.changePassForm.controls['passwordRepeated'].value;
    
    if(newPass == newPassConfirmed){
      this.unmatchingPasswords =  '';
      this.centerAdminService.changePassword(this.centerAdmin.id, this.changePassForm.controls['password'].value).subscribe(res => {alert('Poruka')});
    }
     
    else{
      this.unmatchingPasswords = "Passwords dont match!";
    }
      
  }

}
