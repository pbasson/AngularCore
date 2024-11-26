import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DateClass } from '../../models/date-class.model';

@Component({
  selector: 'app-date-button',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './date-button.component.html',
})
export class DateButtonComponent {
  todayDate: Date = new Date();
  dateClassList: DateClass[] = [ ];
  
  getDate()
  {
    this.todayDate = new Date();

    var datePipe =  new DatePipe("en-GB");
    var dayDisplay = datePipe.transform(this.todayDate, 'EEEE')?.toString() ?? '';
    var dateDisplay = datePipe.transform(this.todayDate, 'd/M/y')?.toString() ?? '';
    var timeDisplay = datePipe.transform(this.todayDate, 'h:mm:ss a')?.toString() ?? '';
    
    var dateClass1 = new DateClass(dayDisplay, dateDisplay, timeDisplay);
    this.dateClassList.push(dateClass1);
  }

  resetDate() { 
    this.dateClassList = [];
  }

}
