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
  
  constructor() {
    this.getDate();
    this.resetDateToToday();    
  }

  getDate() {
    // this.todayDate = new Date();
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
    var tempDisplay = Math.trunc( (Math.random() * (  55 + 70)) - 70 ).toString() + " oC";

    return new DateClass(dayDisplay, dateDisplay, timeDisplay,tempDisplay);
  }

  resetDate() { 
    if (window.confirm( this.confirmReset )){
      this.dateClassList = [];
      this.getDate();    
    }
  }

  resetDateToToday() {
    this.todayDate = new Date();
  }
}
