import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @Output() start: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  startQuestions() {
    this.start.emit(true);
  }
}
