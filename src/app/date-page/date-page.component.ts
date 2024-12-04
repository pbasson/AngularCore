import { Component } from '@angular/core';
import { DateSettings } from '../../models/date-settings';

@Component({
  selector: 'app-date-page',
  standalone: true,
  imports: [],
  templateUrl: './date-page.component.html',
})
export class DatePageComponent {

  dateSetting: DateSettings = new DateSettings();

}
