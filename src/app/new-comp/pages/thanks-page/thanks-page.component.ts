import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-thanks-page',
  templateUrl: './thanks-page.component.html',
  styleUrls: ['./thanks-page.component.scss']
})
export class ThanksPageComponent implements OnInit {
  @Input() lang;
  @Output() startAgain = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
