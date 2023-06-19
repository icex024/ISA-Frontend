import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; 
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  loggedIn?: boolean;
  username?: string;
  userRole?: string;

  ngOnInit(): void {
    this.loggedIn = this.authService.isLoggedIn();
    if(this.loggedIn){
      this.username = this.authService.getUsername();
      console.log('usao');
      this.userRole = this.authService.getAuthorities();
      console.log(this.authService.getAuthorities())

      console.log(this.authService.getToken())
    }
  }

  logIn(){
    this.router.navigate(['login']);
  }

  logOut(){
    console.log('usao')
    this.authService.logOut();
    this.router.navigate([''])
  }

  goToRegistration(){
    this.router.navigate(['register']);
  }

  changeRoute(url:string){
    this.router.navigate([url])
  }

}
