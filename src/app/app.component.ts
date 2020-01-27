import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
   date = new Date();
   time = this.date.getHours() + ':' + this.date.getMinutes() + ' ' +  this.date.getDate() + '.' + (this.date.getMonth()
     + 1) + '.' +  this.date.getFullYear()
}
