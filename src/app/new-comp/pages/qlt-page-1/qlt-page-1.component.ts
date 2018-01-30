import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-qlt-page-1',
  templateUrl: './qlt-page-1.component.html',
  styleUrls: ['./qlt-page-1.component.scss']
})
export class QltPage1Component implements OnInit {

  @Input() langData;
  @Input() lang;
  @Input() fullAnswer;
  @Output() changePage = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
