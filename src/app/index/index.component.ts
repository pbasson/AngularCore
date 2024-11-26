import { Component } from '@angular/core';
import { DateButtonComponent } from '../date-button/date-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [DateButtonComponent, NgbModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  title = 'Angular Core Project';

  alerttest(): void{
    alert("Alert is Successful ");
  }

}
