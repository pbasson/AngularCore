import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DateClass } from '../../models/date-class.model';

@Component({
  selector: 'app-date-button',
  standalone: true,
  imports: [],
  templateUrl: './date-button.component.html',
})
export class DateButtonComponent {
  readonly defaultStr: string = "";
  todayDate: Date = new Date();
  dateClassList: DateClass[] = [ ];
  datePipe =  new DatePipe("en-GB");
  confirmReset = "Do you want to reset date table?";
  minTempature: number = -35;
  maxTempature: number = 55;

  constructor() {
    this.resetDateToNow();    
    this.getDate();
  }

  getDate() {
    this.dateClassList.push( this.setDateClass() );
  }

  getDayDate() {
    this.todayDate.setDate( this.todayDate.getDate() + 1 );
    this.dateClassList.push( this.setDateClass() );
  }

  setDateClass() : DateClass {
    var dayDisplay = this.datePipe.transform(this.todayDate, 'EEEE')?.toString() ?? this.defaultStr;
    var dateDisplay = this.datePipe.transform(this.todayDate, 'd/M/y')?.toString() ?? this.defaultStr;
    var timeDisplay = this.datePipe.transform(this.todayDate, 'h:mm:ss a')?.toString() ?? this.defaultStr;
    var tempDisplay = Math.trunc( (Math.random() * (  this.maxTempature - this.minTempature)) + this.minTempature ).toString() + " oC";

    return new DateClass(dayDisplay, dateDisplay, timeDisplay,tempDisplay);
  }

  resetDate() { 
    if (window.confirm( this.confirmReset )){
      this.dateClassList = [];
      this.getDate();    
    }
  }

  resetDateToNow() {
    this.todayDate = new Date();
  }
}
