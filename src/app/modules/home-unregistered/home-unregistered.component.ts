import { Component, OnInit } from '@angular/core';
import { ShowCentersComponent } from '../show-centers/show-centers.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home-unregistered',
  templateUrl: './home-unregistered.component.html',
  styleUrls: ['./home-unregistered.component.css']
})
export class HomeUnregisteredComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['login']);
  }

  signup() {
    this.router.navigate(['signup-regular']);
  }
}
