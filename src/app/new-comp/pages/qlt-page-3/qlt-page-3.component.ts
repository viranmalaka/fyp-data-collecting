import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-qlt-page-3',
  templateUrl: './qlt-page-3.component.html',
  styleUrls: ['./qlt-page-3.component.scss']
})
export class QltPage3Component implements OnInit {

  @Input() langData;
  @Input() lang;
  @Input() fullAnswer;
  @Output() changePage = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
