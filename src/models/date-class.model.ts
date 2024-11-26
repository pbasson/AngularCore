import { DateVM } from "./date-vm";

export class DateClass implements DateVM {
    public day : string;
    public date: string;
    public time: string; 

    constructor(day: string, date: string, time: string) {
        this.day = day;
        this.date = date;
        this.time = time;
    }

}
