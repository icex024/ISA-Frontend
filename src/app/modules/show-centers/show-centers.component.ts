import { CenterService } from './../services/center.service';
import { ShowCentersDTO } from './../model/showCentersDTO';
import { ActivatedRoute, Router } from '@angular/router';
import { Component,OnInit } from "@angular/core";
import { ThisReceiver } from '@angular/compiler';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../services/auth.service';

let arrayProba = [1,2,3,4,]
@Component({
  selector: 'show-centers',
  templateUrl: './show-centers.component.html',
  styleUrls: ['./show-centers.component.css']
})
export class ShowCentersComponent implements OnInit{
  public centerList: ShowCentersDTO[] = []
  public centerListToShow: ShowCentersDTO[] = []
  public filterBy: string = "nothing"
  public filterValue: string = "nothing"
  public dataSource = new MatTableDataSource<ShowCentersDTO>();
  public searchValue: string = ""
 userType: string;


  constructor(private centerService: CenterService,private route: ActivatedRoute, 
    private router: Router, private authService : AuthService) { }
  
  ngOnInit(): void{
    this.centerService.getAllCenters().subscribe(res => {
      this.centerList = res
      this.centerListToShow = this.centerList
      this.dataSource.data = this.centerList
      console.log(this.dataSource.data )
    });
    this.userType = this.authService.getAuthorities()
  }

  onSearchAndFilterTextEntered(searchValue : string,filterBy: string,filterValue: string){
    console.log(searchValue)
    console.log(filterBy)
    console.log(filterValue)
    this.centerService.getSearchedAndFilteredCenters(searchValue,filterBy,filterValue).subscribe(
      res => {
        this.centerListToShow = res
      }
    )
  }

  seeCenterAppointments(center : ShowCentersDTO){
    this.router.navigate(['free-center-appointments', center.id, center.name]);
  }

}