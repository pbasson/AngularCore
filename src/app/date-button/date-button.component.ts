import { Component } from '@angular/core';
import { DateSettings } from '../../models/date-settings';

@Component({
  selector: 'app-date-button',
  standalone: true,
  imports: [],
  templateUrl: './date-button.component.html',
})
export class DateButtonComponent {

  dateSetting: DateSettings = new DateSettings();

}
