import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss']
})
export class MainWrapperComponent implements OnInit {
  page = 0;

  constructor() { }

  ngOnInit() {
  }

  setPage(num: number) {
    this.page = num;
  }

}