import { AuthService } from './../services/auth.service';
import { AuthGuard } from './../guard/auth.guard';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Credentials } from '../model/credentials';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TokenDTO } from '../model/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  credentials: Credentials = new Credentials();
  showWrongCredentialsMessage: boolean = false;

  ngOnInit(): void {
  }
  
  logIn() :  void {
   if(this.credentials){
    console.log(this.credentials);
    this.authService.LogIn(this.credentials).subscribe({
      next: (response: TokenDTO) => {
        const token = response.accessToken;
        console.log(token)
        if(token){
          this.authService.storeToken(token);
          if(this.authService.getAuthorities() == 'ROLE_USER'){
            this.router.navigate(['/home-page-user']);
          }else if(this.authService.getAuthorities() == 'ROLE_CENTER_ADMIN'){
            this.router.navigate(['/home-page-center-admin']);
          }else if(this.authService.getAuthorities() == 'ROLE_SYSTEM_ADMIN'){
            this.router.navigate(['/home-page-system-admin']);
          }
        } 
        
      },
      error : (err: HttpErrorResponse) => {
        this.showWrongCredentialsMessage = true;
      }
    });
   } 
  }
}
