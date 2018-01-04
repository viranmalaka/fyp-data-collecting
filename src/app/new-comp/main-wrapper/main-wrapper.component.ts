import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss']
})
export class MainWrapperComponent implements OnInit {
  page = 0;

  questionsData = {
    'p1-1' : {
      key: 'name',
      questions : ['What is your name?', 'ඔයාගේ නම කුමක් ද?', 'உங்கள் பெயர் என்ன?'],
    },
    'p1-2' : {
      key: 'grade-9-year',
      questions : ['When did you enter grade 9?', '9 වෙනි ශ්රේණියට ඇතුළත් වුණේ කවදාද?', 'எப்போது நீங்கள் 9 ம் வகுப்பில் நுழைந்தீர்கள்?'],
      options : [
        [2014, 2014, 2014, 2014],
        [2015, 2015, 2015, 2015],
        [2016, 2016, 2016, 2016],
        [2017, 2017, 2017, 2017],
        [2018, 2018, 2018, 2018],
      ]
    },
    'p1-3' : {
      key: 'fav-sub',
      questions : ['What are your favourite subjects?', 'ඔබේ ප්රියතම විෂයයන් මොනවාද?', 'உங்களுக்கு பிடித்த பாடங்கள் என்ன?'],
      options : [
        ['maths', 'Maths', 'ගණිතය', 'கணிதம்'],
      ]
    }
  };

  lang = 1;
  constructor() { }

  ngOnInit() {
  }

  setPage(num: number) {
    this.page = num;
  }

}
