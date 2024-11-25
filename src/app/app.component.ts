import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { DateButtonComponent } from './date-button/date-button.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IndexComponent, DateButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
