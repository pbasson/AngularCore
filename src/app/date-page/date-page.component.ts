import { Component } from '@angular/core';
import { DateSettings } from '../../models/date-settings';
import { DateGridComponent } from '../date-grid/date-grid.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-date-page',
  standalone: true,
  imports: [DateGridComponent, MatProgressSpinnerModule],
  templateUrl: './date-page.component.html',
})
export class DatePageComponent {
  dateSetting: DateSettings = new DateSettings();

}
