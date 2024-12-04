import { Component } from '@angular/core';
import { DateSettings } from '../../models/date-settings';
import { DategridComponent } from '../dategrid/dategrid.component';

@Component({
  selector: 'app-date-page',
  standalone: true,
  imports: [DategridComponent],
  templateUrl: './date-page.component.html',
})
export class DatePageComponent {

  dateSetting: DateSettings = new DateSettings();

}
