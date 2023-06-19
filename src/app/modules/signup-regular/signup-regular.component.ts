import { Component, OnInit } from '@angular/core';
import { RegisteredUser } from '../model/registeredUser';
import { RegisteredUserService } from '../services/registered-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-regular',
  templateUrl: './signup-regular.component.html',
  styleUrls: ['./signup-regular.component.css']
})
export class SignupRegularComponent implements OnInit {

  constructor(private userService : RegisteredUserService,private router:Router) { }

  registeredUser: RegisteredUser = new RegisteredUser();
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

  ngOnInit(): void {
  }

  userRegistration() : void {
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
    
    if(this.nameNull === true|| this.surnameNull === true || this.mailAddressNull === true || this.passwordNull === true || this.jmbgNull === true || this.phoneNull === true ||  this.addressNull === true || this.cityNull === true || this.stateNull === true || this.genderNull === true|| this.ocuppationNull === true|| this.workplaceNull === true|| this.centerIdNull === true) return
    this.userService.register(this.registeredUser).subscribe( 

    );
    this.router.navigate(['/login']);
    }
    private isValidInputName(): boolean{
    this.nameNull = false
    return this.registeredUser.name != ''
  }
  private isValidInputSurname(): boolean{
    this.surnameNull = false
    return this.registeredUser.surname != ''
  }
  private isValidInputMailAddress(): boolean{
    this.mailAddressNull = false
    return this.registeredUser.email != ''
  }
  private isValidInputPassword(): boolean{
    this.passwordNull = false
    return this.registeredUser.password != ''
  }
  private isValidInputJMBG(): boolean{
    this.jmbgNull = false
    return this.registeredUser.jmbg != ''
  }
  private isValidInputPhone(): boolean{
    this.phoneNull = false
    return this.registeredUser.phone != ''
  }
  private isValidInputAddress(): boolean{
    this.addressNull = false
    return this.registeredUser.address != ''
  }
  private isValidInputCity(): boolean{
    this.cityNull = false
    return this.registeredUser.city != ''
  }
  private isValidInputState(): boolean{
    this.stateNull = false
    return  this.registeredUser.state != ''
  }
  private isValidInputGender(): boolean{
    this.genderNull = false
    return  this.registeredUser.gender != ''
  }
  private isValidInputOcupation(): boolean{
    this.ocuppationNull = false
    return  this.registeredUser.occupation != ''
  }
  private isValidInputWorkplace(): boolean{
    this.workplaceNull = false
    return  this.registeredUser.workplace != ''
  }
 

}
