import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router:Router, private authService:AuthService){}
  
    canActivate(next: ActivatedRouteSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.isLoggedIn()) {
        const userRole = this.authService.getAuthorities();
        if (next.data['authorities'] && next.data['authorities'].indexOf(userRole) === -1) {
          this.router.navigate(['']);
          return false;
        }
        //console.log(next.data['authorities']);
        //console.log(userRole);
        return true;
      }
      
      this.router.navigate(['login']);
      return false;     
    }
}