import { Component, OnInit } from '@angular/core';
import { EditRegisteredUser } from '../model/editRegisteredUser';
import { RegisteredUserService } from '../services/registered-user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ShowCentersDTO } from '../model/showCentersDTO';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

   public registeredUser: EditRegisteredUser = new EditRegisteredUser()


  constructor(private regUserService: RegisteredUserService,private route: ActivatedRoute, private router: Router , private authService: AuthService) { }

  public centerList: ShowCentersDTO[] = []

  ngOnInit(): void {
      this.regUserService.getRegisteredUserForEdit().subscribe(res => {
        this.registeredUser = res
      }
  )
}


  public editUser(){
    this.regUserService.editRegisteredUser(this.registeredUser).subscribe(
      res => {
        alert("Poruka")
      }
    )
  }

}
