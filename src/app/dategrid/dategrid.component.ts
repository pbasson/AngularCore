import { Component, Input } from '@angular/core';
import { DateSettings } from '../../models/date-settings';

@Component({
  selector: 'app-dategrid',
  standalone: true,
  imports: [],
  templateUrl: './dategrid.component.html',
  styleUrl: './dategrid.component.css'
})
export class DategridComponent {
  @Input() dateSetting: DateSettings = new DateSettings();
       
}
