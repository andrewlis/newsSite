import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-bottom',
  templateUrl: './column-bottom.component.html',
  styleUrls: ['./column-bottom.component.scss']
})
export class ColumnBottomComponent implements OnInit {
   news: Array<any> = [
      {newsName: ' В Турции пообещали найти альтернативу из-за отказа США поставить F-35',
      newsTag: '/Политика',
      newsTime: '11:39',
      newsComment: '25'},
     {newsName: ' Назван минимальный доход для причисления к среднему классу‍',
      newsTag: '/Политика',
      newsTime: '11:39',
      newsComment: '25'},
     {newsName: ' В Турции пообещали найти альтернативу из-за отказа США поставить F-35',
      newsTag: '/Политика',
      newsTime: '11:39',
      newsComment: '25'},
     ]
  constructor() { }

  ngOnInit() {
  }

}
