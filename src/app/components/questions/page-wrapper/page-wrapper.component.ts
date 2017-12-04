import {Component, OnInit} from '@angular/core';
import {QuestionsService} from '../../../providers/questions.service';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss']
})
export class PageWrapperComponent implements OnInit {
  pageNumber = 1;
  pages = [];

  constructor(private qs: QuestionsService) {
  }

  ngOnInit() {
    this.pages = this.qs.getPages();
  }

  setPage(num) {
    this.pageNumber = num;
  }
}
