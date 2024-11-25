import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-button',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './date-button.component.html',

})
export class DateButtonComponent {
  dateMsg: Date = new Date();
  todayDate: Date = new Date();



  getDate()
  {
    this.dateMsg = new Date();
    this.todayDate = new Date();
  }
}
