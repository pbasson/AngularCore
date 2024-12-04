import { Component, Input } from '@angular/core';
import { DateClass } from '../../models/date-class.model';

@Component({
  selector: 'app-date-grid',
  standalone: true,
  imports: [],
  templateUrl: './date-grid.component.html',
  styleUrl: './date-grid.component.css'
})
export class DateGridComponent {
  @Input({ required:true }) dataSource!: DateClass[];
       
}
