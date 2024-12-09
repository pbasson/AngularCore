import { Component, Input, AfterViewInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
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
export class DateGridComponent implements AfterViewInit, OnChanges{
  displayedColumns: string[] = ['Index', 'Day', 'Date', 'Time', 'Temp'];     
  @Input({ required:true }) dataSource!: MatTableDataSource<DateClass>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  ngAfterViewInit() {
    this.setPaginator();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.setPaginator();
    }
  }
  
  setPaginator() {
    this.dataSource.paginator = this.paginator;
  }
}
