import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-options',
  templateUrl: './dynamic-options.component.html',
  styleUrls: ['./dynamic-options.component.scss']
})
export class DynamicOptionsComponent implements OnInit {

  @Input()
  inputOptions = {
    options: [
      {name: 'Maths', key: 'maths', checked: {mainSelect: false, subSelect: {}}},
      {name: 'English', key: 'english', checked: {mainSelect: false, subSelect: {}}},
      {name: 'History', key: 'history', checked: {mainSelect: false, subSelect: {}}}
      ],
    subOptions: [
      {name: 'grade 6', key: 'g6'},
      {name: 'grade 7', key: 'g7'},
      {name: 'grade 8', key: 'g8'}
      ],
    other: {
      active: true,
      checked: {
        subSelect: {
          place: ''
        }
      }
    },
    place: true,
  };

  constructor() {
  }

  ngOnInit() {

  }
}
