import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Survey } from '../model/survey';
import { SurveyService } from '../services/survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  
  public survey:Survey=new Survey();

  @Output() surveyFilled = new EventEmitter<boolean>();



  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
  }



  createSurvey(){
    console.log(this.survey)
    this.surveyService.createSurvey(this.survey).subscribe(res=>{
       alert("Successfully fill your survey")
       this.surveyFilled.emit(false);
      },error =>{
        alert("You did not fill your survey conscientiously")
    });

  }




}
