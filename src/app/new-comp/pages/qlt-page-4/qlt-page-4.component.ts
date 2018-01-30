import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-qlt-page-4',
  templateUrl: './qlt-page-4.component.html',
  styleUrls: ['./qlt-page-4.component.scss']
})
export class QltPage4Component implements OnInit {
  @Input() langData;
  @Input() lang;
  @Input() fullAnswer;
  @Output() changePage = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
}
