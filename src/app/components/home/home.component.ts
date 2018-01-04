import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../../providers/questions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  questions: any[];

  constructor(service: QuestionsService) {
    service.loadQuestions();
  }

  ngOnInit() {
  }

}
