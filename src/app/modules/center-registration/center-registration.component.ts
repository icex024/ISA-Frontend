import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { CenterRegistrationDto } from '../model/centerRegistrationDto';
import { CenterRegistrationService } from '../services/center-registration.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-center-registration',
  templateUrl: './center-registration.component.html',
  styleUrls: ['./center-registration.component.css']
})
export class CenterRegistrationComponent  {
  public centerRegistrationDto : CenterRegistrationDto = new CenterRegistrationDto()
  nameNull: boolean=false;
  addressNull: boolean=false;
  cityNull: boolean=false;
  stateNull: boolean=false;
  descriptionNull: boolean=false;
  ratingNull: boolean=false;
  workStartNull: boolean=false;
  workEndNull: boolean=false;
  longitudeNull: boolean=false;
  latitudeNull: boolean=false;
 

  constructor(private centerRegistartionService : CenterRegistrationService) { }

  public centerRegisration () {
    if(!this.isValidInputName()) this.nameNull = true
    if(!this.isValidInputAddress()) this.addressNull = true
    if(!this.isValidInputCity()) this.cityNull = true
    if(!this.isValidInputState()) this.stateNull = true
    if(!this.isValidInputDescription()) this.descriptionNull = true
    if(!this.isValidInputRating()) this.ratingNull = true 
    if(!this.isValidInputWorkStart()) this.workStartNull = true
    if(!this.isValidInputWorkEnd()) this.workEndNull = true
    
    

    if(this.nameNull === true || this.addressNull === true || this.cityNull === true || this.stateNull === true 
      || this.descriptionNull === true|| this.ratingNull === true|| this.workStartNull === true|| this.workEndNull === true ||
      this.longitudeNull === true || this.latitudeNull === true
      ) return

    this.centerRegistartionService.createCenter(this.centerRegistrationDto).subscribe({
      next: (response: any) => {
        console.log('success')
      },
      error: (err: HttpErrorResponse) =>{
        console.log('failed')
      }  
    });
  }
  private isValidInputName(): boolean{
    this.nameNull = false
    return this.centerRegistrationDto.name != ''
  }
  private isValidInputAddress(): boolean{
    this.addressNull = false
    return this.centerRegistrationDto.address != ''
  }
  private isValidInputCity(): boolean{
    this.cityNull = false
    return this.centerRegistrationDto.city != ''
  }
  private isValidInputState(): boolean{
    this.stateNull = false
    return  this.centerRegistrationDto.state != ''
  }
  private isValidInputDescription(): boolean{
    this.descriptionNull = false
    return  this.centerRegistrationDto.description != ''
  }
  private isValidInputRating(): boolean{
    if(this.centerRegistrationDto.rating >0 && this.centerRegistrationDto.rating <=5){this.ratingNull = false}
    return  this.centerRegistrationDto.rating >0
  }
  private isValidInputWorkStart(): boolean{
    if(this.centerRegistrationDto.workStart >0 && this.centerRegistrationDto.workStart <=24 && this.centerRegistrationDto.workStart<this.centerRegistrationDto.workEnd){this.workStartNull = false}
    return  this.centerRegistrationDto.workStart >0
  }
  private isValidInputWorkEnd(): boolean{
    if(this.centerRegistrationDto.workEnd >0 && this.centerRegistrationDto.workEnd <=24 && this.centerRegistrationDto.workStart<this.centerRegistrationDto.workEnd){this.workEndNull = false}
    return  this.centerRegistrationDto.workEnd >0
  }
  private isValidInputLongitude(): boolean{
    if(this.centerRegistrationDto.longitude > 0 ){this.longitudeNull = false}
    return  this.centerRegistrationDto.longitude >0
  }
  private isValidInputLatitude(): boolean{
    if(this.centerRegistrationDto.latitude >0 ){this.latitudeNull = false}
    return  this.centerRegistrationDto.latitude >0
  }

}
