import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  cities = ['City','City2','City3','City4','City5']

  constructor() {

  }

  ngOnInit() {

  }

}
