import { DatePipe } from '@angular/common';
import { DateClass } from '../models/date-class.model';

export class DateSettings {
    readonly defaultStr: string = "";
    readonly datePipe =  new DatePipe("en-GB");
    readonly confirmReset = "Do you want to reset date table?";
    readonly minTempature: number = -35;
    readonly maxTempature: number = 55;
    
    todayDate: Date = new Date();
    dateClassList: DateClass[] = [ ];
  
    constructor() {
        this.resetDateToNow();  
        this.getDate();
    }
  
    getDate() {
        this.resetDateToNow();  
        this.dateClassList.push( this.setDateClass() );
    }
  
    getDayDate() {
      this.todayDate.setDate( this.todayDate.getDate() + 1 );
      this.dateClassList.push( this.setDateClass() );
    }
  
    resetDate() { 
      if (window.confirm( this.confirmReset )){
        this.dateClassList = [];
        this.getDate();    
      }
    }
  
    setDateClass() : DateClass {
      var dayDisplay = this.datePipe.transform(this.todayDate, 'EEEE')?.toString() ?? this.defaultStr;
      var dateDisplay = this.datePipe.transform(this.todayDate, 'd/M/y')?.toString() ?? this.defaultStr;
      var timeDisplay = this.datePipe.transform(this.todayDate, 'h:mm:ss a')?.toString() ?? this.defaultStr;
      var tempDisplay = Math.trunc( (Math.random() * (  this.maxTempature - this.minTempature)) + this.minTempature ).toString() + " oC";
  
      return new DateClass(dayDisplay, dateDisplay, timeDisplay,tempDisplay);
    }
  
    resetDateToNow() {
      this.todayDate = new Date();
    }

}
