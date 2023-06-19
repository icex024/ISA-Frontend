import { Component, OnInit } from '@angular/core';
import { ShowUsersService } from '../services/show-users.service';
import { RegisteredUser } from '../model/registeredUser';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  public registeredUsers : RegisteredUser[]=[];
  searchText: String=""
  

  constructor(private registeredUserService : ShowUsersService, private router: Router) { }

  ngOnInit(): void {
    this.registeredUserService.getAll().subscribe(res => {
      this.registeredUsers = res ;      
    })
  }

  // onSearchTextEntered(searchValue : string){
  //   if(searchValue != ''){
  //     this.registeredUsers = this.registeredUsers.filter(res => searchValue === '' || res.name.toLowerCase().includes(searchValue) || res.surname.toLowerCase().includes(searchValue) );
  //     console.log('currently shown users ',this.registeredUsers);
  //   }
  //   else
  //     this.registeredUsers;

  Search(searchText:any){

    this.registeredUserService.getSearchedUsers(searchText).subscribe(res => {
      this.registeredUsers = res ;
    })
    window.location.reload;


  }

    
  
}
