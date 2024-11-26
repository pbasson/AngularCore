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
    var test1 = datePipe.transform(this.todayDate, 'EEEE')?.toString() ?? '';
    var test2 = datePipe.transform(this.todayDate, 'd/M/y')?.toString() ?? '';
    var test3 = datePipe.transform(this.todayDate, 'h:mm:ss a')?.toString() ?? '';
    
    var dateClass1 = new DateClass(test1, test2, test3);
    this.dateClassList.push(dateClass1);
  }
}
