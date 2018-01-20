import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-q-page-3',
  templateUrl: './q-page-3.component.html',
  styleUrls: ['./q-page-3.component.scss']
})
export class QPage3Component implements OnInit {

  @Input() langData;
  @Input() lang;
  @Input() fullAnswer;
  @Output() changePage = new EventEmitter<any>();

  count = 0;

  constructor() {
  }

  ngOnInit() {
    const dymOptions = [];
    this.langData['p3-1'].options.forEach(val => {
      dymOptions.push(
        {name: val[this.lang + 1], key: val[0], checked: {mainSelect: false, subSelect: {}}},
      )
    });
    this.fullAnswer[this.langData['p3-1'].key] = {
      options: dymOptions,
      subOptions: [
        {name: ['grade 6', '6 ශ්‍රේණියට'][this.lang], key: 'g6'},
        {name: ['grade 7', '7 ශ්‍රේණියට'][this.lang], key: 'g7'},
        {name: ['grade 8', '8 ශ්‍රේණියට'][this.lang], key: 'g8'}
      ],
      other: {
        active: true,
        checked: {
          subSelect: {
            place: ''
          }
        }
      },
      place: true
    }
  }

  getArray() {
    return Array(this.count).fill(0).map((x, i) => i);
  }
}
