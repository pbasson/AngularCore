import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  title = 'Angular Core Project';

  alerttest(): void{
    alert("Alert is Successful ");
  }

}
