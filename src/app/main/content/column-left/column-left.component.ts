import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-left',
  templateUrl: './column-left.component.html',
  styleUrls: ['./column-left.component.scss']
})
export class ColumnLeftComponent implements OnInit {
   news: Array<any> = [
      {newsName: 'Кот Ахилл предсказал победу российской сборной над Египтом на ЧМ-2018',
      newsTag: '/ЧМ по футболу',
      newsTime: '10:49',
      newsComment: '10'},

      {newsName: '«Нафтогаз»: суд разрешил заморозить активы «Газпрома» в Великобритании',
      newsTag: '/ Политика',
      newsTime: '10:45',
      newsComment: '10'},

      {newsName: ' Минтранс предписал оборудовать общественный транспорт кондиционерами',
       newsTag: '/ Транспорт',
       newsTime: '10:49',
       newsComment: '10'},

      {newsName: 'Летние кафе Москвы временно закроются из-за непогоды',
       newsTag: '/ Погода',
      newsTime: '10:49',
      newsComment: '10'},

     {newsName: 'Комплексное благоустройство Щелковского шоссе завершится в июне',
      newsTag: '/ Транспорт',
      newsTime: '10:49',
       newsComment: '10'},
      {newsName: 'В Москве назвали самое популярное мороженое у болельщиков ЧМ-2018',
      newsTag: '/ЧМ по футболу',
      newsTime: '10:49',
      newsComment: '10'}
    ];
  constructor() { }

  ngOnInit() {
  }

}


