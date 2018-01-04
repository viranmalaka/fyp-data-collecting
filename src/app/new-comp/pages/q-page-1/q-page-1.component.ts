import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-q-page-1',
  templateUrl: './q-page-1.component.html',
  styleUrls: ['./q-page-1.component.scss']
})
export class QPage1Component implements OnInit {

  @Input() langData;
  @Input() lang;

  constructor() { }

  ngOnInit() {
  }
}
