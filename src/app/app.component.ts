import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'User';
  successMsg = 'Congratulations! Your app is running. 🎉';
  newLine = "This Phantom Preet the new ruler !!!!!";
  
  dateMsg: Date = new Date();
  todayDate: Date = new Date();
}
