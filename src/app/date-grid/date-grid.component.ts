import { Component, Input } from '@angular/core';
import { DateClass } from '../../models/date-class.model';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-date-grid',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './date-grid.component.html',
  styleUrl: './date-grid.component.css'
})
export class DateGridComponent {
  @Input({ required:true }) dataSource!: DateClass[];
  displayedColumns: string[] = ['Index', 'Day', 'Date', 'Time', 'Temp'];     
}
