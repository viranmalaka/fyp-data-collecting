import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-q-page-2',
  templateUrl: './q-page-2.component.html',
  styleUrls: ['./q-page-2.component.scss']
})
export class QPage2Component implements OnInit {

  @Input() langData;
  @Input() lang;
  @Input() fullAnswer;
  @Output() changePage = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
