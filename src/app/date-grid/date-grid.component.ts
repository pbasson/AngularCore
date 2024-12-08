import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { DateClass } from '../../models/date-class.model';

@Component({
  selector: 'app-date-grid',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './date-grid.component.html',
  styleUrl: './date-grid.component.css'
})
export class DateGridComponent implements AfterViewInit {
  @Input({ required:true }) dataSource!: MatTableDataSource<DateClass>;
  displayedColumns: string[] = ['Index', 'Day', 'Date', 'Time', 'Temp'];     

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
