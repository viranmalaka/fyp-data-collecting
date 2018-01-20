import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-q-page-4',
  templateUrl: './q-page-4.component.html',
  styleUrls: ['./q-page-4.component.scss']
})
export class QPage4Component implements OnInit {
  @Input() langData;
  @Input() lang;
  @Input() fullAnswer;
  @Output() changePage = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    const dymOptions = [];
    this.langData['p4-1'].options.forEach(val => {
      dymOptions.push(
        {name: val[this.lang + 1], key: val[0], checked: {mainSelect: false, subSelect: {}}},
      )
    });
    this.fullAnswer[this.langData['p4-1'].key] = {
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
    };

    const dmyOption2 = [];
    this.langData['p4-2'].options.forEach(val => {
      dmyOption2.push(
        {name: val[this.lang + 1], key: val[0], checked: {mainSelect: false, subSelect: {}}},
      )
    });
    this.fullAnswer[this.langData['p4-2'].key] = {
      options: dmyOption2,
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
    };

    this.fullAnswer[this.langData['p4-3']['key']] = {};
  }

}
