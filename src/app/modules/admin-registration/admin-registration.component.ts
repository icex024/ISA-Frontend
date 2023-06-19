import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { AdminRegistrationDto } from '../model/adminRegistrationDto';
import { AdminRegistrationService } from '../services/admin-registration.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent  {

  public adminRegistrationDto : AdminRegistrationDto = new AdminRegistrationDto()
  userNameNull: boolean = false;
  nameNull: boolean=false;
  surnameNull: boolean=false;
  mailAddressNull: boolean=false;
  passwordNull: boolean=false;
  jmbgNull: boolean=false;
  phoneNull: boolean=false;
  addressNull: boolean=false;
  cityNull: boolean=false;
  stateNull: boolean=false;
  genderNull: boolean=false;
  ocuppationNull: boolean=false;
  workplaceNull: boolean=false;
  centerIdNull: boolean=false;
  
 

  constructor(private adminRegistrationService : AdminRegistrationService ) { }

  public adminRegistration () {
    if(!this.isValidInputUserName()) this.userNameNull = true
    if(!this.isValidInputName()) this.nameNull = true
    if(!this.isValidInputSurname()) this.surnameNull = true
    if(!this.isValidInputMailAddress()) this.mailAddressNull = true
    if(!this.isValidInputPassword()) this.passwordNull = true
    if(!this.isValidInputJMBG()) this.jmbgNull = true
    if(!this.isValidInputPhone()) this.phoneNull = true
    if(!this.isValidInputAddress()) this.addressNull = true
    if(!this.isValidInputCity()) this.cityNull = true
    if(!this.isValidInputState()) this.stateNull = true
    if(!this.isValidInputGender()) this.genderNull = true
    if(!this.isValidInputOcupation()) this.ocuppationNull = true 
    if(!this.isValidInputWorkplace()) this.workplaceNull = true
    if(!this.isValidInputCenterId()) this.centerIdNull = true
    
    

    if(this.nameNull === true|| this.surnameNull === true || this.mailAddressNull === true || this.passwordNull === true || this.jmbgNull === true || this.phoneNull === true ||  this.addressNull === true || this.cityNull === true || this.stateNull === true || this.genderNull === true|| this.ocuppationNull === true|| this.workplaceNull === true|| this.centerIdNull === true) return

    if(this.adminRegistrationDto.role == "System admin"){
      this.adminRegistrationDto.centerId = 0;
    }
    this.adminRegistrationService.createAdmin(this.adminRegistrationDto).subscribe(reg => {
      alert("Zahtev poslat")
    },error =>{
      alert("Los zahtev")
    })
  }
  private isValidInputUserName(): boolean{
    this.userNameNull = false
    return this.adminRegistrationDto.username != ''
  }

  private isValidInputName(): boolean{
    this.nameNull = false
    return this.adminRegistrationDto.name != ''
  }
  private isValidInputSurname(): boolean{
    this.surnameNull = false
    return this.adminRegistrationDto.surname != ''
  }
  private isValidInputMailAddress(): boolean{
    this.mailAddressNull = false
    return this.adminRegistrationDto.address != ''
  }
  private isValidInputPassword(): boolean{
    this.passwordNull = false
    return this.adminRegistrationDto.password != ''
  }
  private isValidInputJMBG(): boolean{
    this.jmbgNull = false
    return this.adminRegistrationDto.jmbg != ''
  }
  private isValidInputPhone(): boolean{
    this.phoneNull = false
    return this.adminRegistrationDto.phone != ''
  }
  private isValidInputAddress(): boolean{
    this.addressNull = false
    return this.adminRegistrationDto.address != ''
  }
  private isValidInputCity(): boolean{
    this.cityNull = false
    return this.adminRegistrationDto.city != ''
  }
  private isValidInputState(): boolean{
    this.stateNull = false
    return  this.adminRegistrationDto.state != ''
  }
  private isValidInputGender(): boolean{
    this.genderNull = false
    return  this.adminRegistrationDto.gender != ''
  }
  private isValidInputOcupation(): boolean{
    this.ocuppationNull = false
    return  this.adminRegistrationDto.occupation != ''
  }
  private isValidInputWorkplace(): boolean{
    this.workplaceNull = false
    return  this.adminRegistrationDto.workplace != ''
  }
  private isValidInputCenterId(): boolean{
    this.centerIdNull = false
    return  this.adminRegistrationDto.centerId >0
  }

}
