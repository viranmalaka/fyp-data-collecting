import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss']
})
export class MainWrapperComponent implements OnInit {
  page = 0;

  allSubject = [
    ['sinhala', '', 'සිංහල භාෂාව'],
    ['maths', '', 'ගණිතය'],
    ['science', '', 'විද්‍යාව'],
    ['art', '', 'චිත්‍ර'],
    ['dance', '', 'නර්තනය'],
    ['east-music', '', 'පෙරදිග සංගීතය'],
    ['west-music', '', 'බටහිර සංගීතය'],
    ['buddhism', '', 'බුද්ධ ධර්මය'],
    ['history', '', 'ඉතිහාසය'],
    ['pts', '', 'ප්‍රායෝගික හා තාක්ෂණික කුසලතා'],
    ['tamil', '', 'දෙමල(දෙවැනි බස)'],
    ['english', '', 'ඉංග්‍රීසි'],
    ['geology', '', 'භූගෝලය'],
    ['ce', '', 'පුරවැසි අධ්‍යාපනය'],
    ['ict', '', 'තොරතුරු හා සන්නිවේදන තාක්ෂණය'],
    ['health', '', 'සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය'],
    ['islam', '', 'ඉස්ලාම්'],
    ['cristian', '', 'ක්‍රිස්තියානි ධර්මය'],
    ['katalic', '', 'කතෝලික ධර්මය'],
    ['bharatha', '', 'භරත නාට්‍යම්'],
    ['acting', '', 'නාට්‍ය හා රංගකලාව'],
  ];

  questionsData = {
    'p1-1': {
      key: 'name',
      questions: ['What is your name?', 'ඔයාගේ නම කුමක් ද?', 'உங்கள் பெயர் என்ன?'],
    },
    'p1-2': {
      key: 'grade-9-year',
      questions: ['When did you enter grade 9?', 'ඔබ 9 ශ්‍රේණියට ඇතුලත් වූ වසර කුමක්ද?', 'எப்போது நீங்கள் 9 ம் வகுப்பில் நுழைந்தீர்கள்?'],
      options: [
        [2014, 2014, 2014, 2014],
        [2015, 2015, 2015, 2015],
        [2016, 2016, 2016, 2016],
        [2017, 2017, 2017, 2017],
        [2018, 2018, 2018, 2018],
        [2019, 2019, 2019, 2019],
      ]
    },

    'p2-1': {
      key: 'fav-subject',
      questions: ['What are your favourite subjects?', 'ඔබේ කැමතිම විෂයයන් මොනවද?', 'உங்களுக்கு பிடித்த பாடங்கள் என்ன?'],
      options: this.allSubject,
    },
    'p2-2': {
      key: 'fav-lesson',
      questions: ['What are your favourite lessons?', 'ඔබ කැමතිම පාඩම් මොනවාද ?']
    },
    'p2-3': {
      key: 'hard-subject',
      questions: ['What are the hardest subjects for you?', 'ඔබට අපහසුම විෂය කුමක්ද ?'],
      options: this.allSubject
    },
    'p2-4': {
      key: 'hard-lesson',
      questions: ['What are the hardest lessons for you?', 'ඔබට අපහසුම පාඩම් මොනවාද ?']
    },
    'p2-5': {
      key: 'ambition',
      questions: ['What is your ambition?', 'ඔබේ අනාගත බලාපොරෝත්තුව කුමක්ද ?']
    },
    'p2-6': {
      key: 'scholarship-marks',
      questions: ['What is your grade 5 scholarship marks?', '5 වසර ශිෂ්‍යත්ව විභාගයේ ලකුණු කීයද ?']
    },

    'p3-1': {
      key: 'tution',
      questions: ['For which subjects do/did you participate tution classes? ', 'ඔබ අමතර පන්තිවලට සහභාගී වූ  විෂයන් මොනවාද  ?'],
      options: this.allSubject
    },

    'p3-2': {
      key: 'father-edu',
      questions: ['What is the education level of father?', 'ඔබේ පියාගේ අධ්‍යාපනික මට්ටම කුමක්ද?'],
      options: [
        ['ltol', 'Less Than O/L' , 'සාමාන්‍ය පෙළට අඩු'],
        ['lo', 'O/L', 'සාමාන්‍ය පෙළ(O/L)'],
        ['al', 'A/L', 'උසස් පෙළ(A/L)'],
        ['uni', 'University', 'උපාධිධාරී']
      ],
    },
    'p3-3': {
      key: 'father-occupation',
      questions: ['What is the occupation of father?', 'ඔබේ පියාගේ රැකියාව කුමක්ද ?', ''],
    },
    'p3-4': {
      key: 'mother-edu',
      questions: ['What is the education level of mother?', 'ඔබේ මවගේ අධ්‍යාපනික මට්ටම කුමක්ද?'],
      options: [
        ['ltol', 'Less Than O/L' , 'සාමාන්‍ය පෙළට අඩු'],
        ['ol', 'O/L', 'සාමාන්‍ය පෙළ(O/L)'],
        ['al', 'A/L', 'උසස් පෙළ(A/L)'],
        ['uni', 'University', 'උපාධිධාරී']
      ],
    },
    'p3-5': {
      key: 'mother-occupation',
      questions: ['What is the occupation of mother?', 'ඔබේ මවගේ  රැකියාව කුමක්ද ?', ''],
    },
    'p3-6': {
      key: 'siblings-edu',
      questions: ['How much brothers or sister you have ?', 'ඔබට සහෝදර සහෝදරියන් කොපමණ සිටීද?'],
      questions_2: ['Their education level ?', 'ඔවුන්ගේ අධ්‍යාපනික මට්ටම කුමක්ද ?'],
      options: [
        ['ltol', 'Less Than O/L' , 'සාමාන්‍ය පෙළට අඩු'],
        ['ol', 'O/L', 'සාමාන්‍ය පෙළ(O/L)'],
        ['al', 'A/L', 'උසස් පෙළ(A/L)'],
        ['uni', 'University', 'උපාධිධාරී']
      ],
    },

    'p4-1': {
      key: 'sports',
      questions: ['Have you involved in sports?', 'ඔබ ක්‍රීඩා සඳහා සහභාගී වී තිබේද ?'],
      options: [
        ['cricket', '', 'ක්‍රිකට්'],
        ['athletics', '', 'මළල ක්‍රීඩා'],
        ['rugby', '', 'රගර්'],
      ]
    },
    'p4-2': {
      key: 'clubs',
      questions: ['Have you involved in clubs, societies etc?', 'ඔබ සමිති, සමාජ හෝ සංගම් සඳහා සහභාගී වී තිබේද ?'],
      options: [
        ['buddhism', '', 'බෞද්ද සංගමය'],
      ]
    },
    'p4-3': {
      key: 'monitor',
      questions: ['Have you been a monitor or a prefect?', 'ඔබ පන්ති නායකයා හෝ ශිෂ්‍ය නායකයා වී තිබේද ?'],
      options: [{name: ['grade 6', '6 ශ්‍රේණියට'], key: 'g6'},
        {name: ['grade 7', '7 ශ්‍රේණියට'], key: 'g7'},
        {name: ['grade 8', '8 ශ්‍රේණියට'], key: 'g8'}
        ]
    }
  };

  lang = 1;

  fullAnswer = {};

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  setPage(num: number) {
    this.page = num;
    console.log(this.fullAnswer);
    this.dataService.edit('record', {_id: this.fullAnswer['_id']}, this.fullAnswer);
  }

  startQuiz() {
    this.page = 1;
    this.dataService.insert('record', {}).then(data => {
      this.fullAnswer['_id'] = data.doc._id;
    });
  }

}
