import { Component } from '@angular/core';
import { DatePageComponent } from '../date-page/date-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [DatePageComponent, NgbModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  title = 'Angular Core Project';

  alerttest(): void{
    alert("Alert is Successful ");
  }

}
