import { Component, Input } from '@angular/core';
import { DateSettings } from '../../models/date-settings';

@Component({
  selector: 'app-date-grid',
  standalone: true,
  imports: [],
  templateUrl: './date-grid.component.html',
  styleUrl: './date-grid.component.css'
})
export class DateGridComponent {
  @Input({ required:true }) dateSetting!: DateSettings;
       
}
