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

  constructor() {
    this.getDate();    
  }

  getDate() {
    this.todayDate = new Date();
    var dayDisplay = this.datePipe.transform(this.todayDate, 'EEEE')?.toString() ?? this.defaultStr;
    var dateDisplay = this.datePipe.transform(this.todayDate, 'd/M/y')?.toString() ?? this.defaultStr;
    var timeDisplay = this.datePipe.transform(this.todayDate, 'h:mm:ss a')?.toString() ?? this.defaultStr;
    
    var dateClass1 = new DateClass(dayDisplay, dateDisplay, timeDisplay);
    this.dateClassList.push(dateClass1);
  }

  resetDate() { 
    if (window.confirm("Do you want to reset date table?")){
      this.dateClassList = [];
      this.getDate();    
    }
  }

}
