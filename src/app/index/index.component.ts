import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  title = 'User';
  successMsg = 'Congratulations! Your app is running. 🎉';
  newLine = "!!!!!";
  
  dateMsg: Date = new Date();
  todayDate: Date = new Date();
}
