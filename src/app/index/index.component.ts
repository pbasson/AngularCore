import { Component } from '@angular/core';
import { DateButtonComponent } from '../date-button/date-button.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [DateButtonComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  title = 'Angular Core Project';

  alerttest(): void{
    alert("Alert is Successful ");
  }

}
