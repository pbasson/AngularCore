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
  todayDate: Date = new Date();
  dateClassList: DateClass[] = [ ];
  datePipe =  new DatePipe("en-GB");
  
  constructor() {
    this.getDate();    
  }

  getDate() {
    this.todayDate = new Date();
    var dayDisplay = this.datePipe.transform(this.todayDate, 'EEEE')?.toString() ?? '';
    var dateDisplay = this.datePipe.transform(this.todayDate, 'd/M/y')?.toString() ?? '';
    var timeDisplay = this.datePipe.transform(this.todayDate, 'h:mm:ss a')?.toString() ?? '';
    
    var dateClass1 = new DateClass(dayDisplay, dateDisplay, timeDisplay);
    this.dateClassList.push(dateClass1);
  }

  resetDate() { 
    this.dateClassList = [];
    this.getDate();    
  }

}
