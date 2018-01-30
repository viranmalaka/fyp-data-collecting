import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-qlt-page-2',
  templateUrl: './qlt-page-2.component.html',
  styleUrls: ['./qlt-page-2.component.scss']
})
export class QltPage2Component implements OnInit {

  @Input() langData;
  @Input() lang;
  @Input() fullAnswer;
  @Output() changePage = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
