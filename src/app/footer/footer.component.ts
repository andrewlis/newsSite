import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  gbbh: any;

  constructor() {
    let date = new Date();
    this.gbbh = date.getHours() + ':' + date.getMinutes();

  }

  ngOnInit() {
  }

}
