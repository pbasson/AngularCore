import { Component } from '@angular/core';
import { DateSettings } from '../../models/date-settings';
import { DateGridComponent } from '../date-grid/date-grid.component';

@Component({
  selector: 'app-date-page',
  standalone: true,
  imports: [DateGridComponent],
  templateUrl: './date-page.component.html',
})
export class DatePageComponent {
  dateSetting: DateSettings = new DateSettings();

}
