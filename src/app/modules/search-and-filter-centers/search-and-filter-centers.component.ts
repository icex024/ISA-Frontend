import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: 'search-and-filter-centers',
  templateUrl: './search-and-filter-centers.component.html',
  styleUrls: ['./search-and-filter-centers.component.css']

})
export class SearchAndFilterCentersComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    
  }

  enteredSearchValue : string = "";
  filterBy : string = "";
  filterValue : string = "";

  @Output()
  searchTextChanged: EventEmitter<{enteredSearchValue:string , filterBy: string, filterValue: string}> = 
  new EventEmitter<{enteredSearchValue:string , filterBy: string, filterValue: string}>();

  @Output()
  filterByChanged: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  filterValueChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchAndFilterTextChanged(){
    
    this.searchTextChanged.emit({enteredSearchValue : this.enteredSearchValue,filterBy : this.filterBy,filterValue : this.filterValue});
    
  }
  onSearchAndFilterTextChanged1(event:Event){
    this.filterBy = (event.target as HTMLSelectElement).value
    this.searchTextChanged.emit({enteredSearchValue : this.enteredSearchValue,filterBy : this.filterBy,filterValue : this.filterValue});
    
  }
  onSearchAndFilterTextChanged2(event:Event){
    this.filterValue = (event.target as HTMLSelectElement).value
    this.searchTextChanged.emit({enteredSearchValue : this.enteredSearchValue,filterBy : this.filterBy,filterValue : this.filterValue}); 
  }

}