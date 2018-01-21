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

  tutionSub = [
    ['sinhala', '', 'සිංහල භාෂාව'],
    ['maths', '', 'ගණිතය'],
    ['science', '', 'විද්‍යාව'],
    ['history', '', 'ඉතිහාසය'],
    ['tamil', '', 'දෙමල(දෙවැනි බස)'],
    ['english', '', 'ඉංග්‍රීසි'],
    ['ict', '', 'තොරතුරු හා සන්නිවේදන තාක්ෂණය'],
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
      options: this.tutionSub
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
        ['cricket', 'Cricket', 'ක්‍රිකට්'],
        ['athletics', 'Athletics', 'මළල ක්‍රීඩා'],
        ['football', 'Football', 'පාපන්දු'],
        ['rugby', 'Ruger', 'රගර්'],
        ['basketball', 'Basketball', 'පැසිපන්දු'],
        ['volleyball', 'Volleyball', 'වොලිබෝල්'],
        ['hokey', 'Hockey', 'හොකී'],
        ['swimming', 'Swimming', 'පිහිනුම්'],
        ['badminton', 'Badminton', 'බැඩ්මින්ටන්'],
        ['tennis', 'Tennis', 'ටෙනිස්'],
        ['tableTennis', 'Table Tennis', 'මේස පන්දු'],

      ]
    },
    'p4-2': {
      key: 'clubs',
      questions: ['Have you involved in clubs, societies etc?', 'ඔබ සමිති, සමාජ හෝ සංගම් සඳහා සහභාගී වී තිබේද ?'],
      options: [
        ['cadetting', 'Cadetting', 'ශිෂ්‍ය භට කණ්ඩායම'],
        ['scouting', 'Scouting', 'බාලදක්ෂ'],
        ['firstAid', 'First Aid', 'ප්‍රථමාධාර සමිතිය'],
        ['Traffic', 'Traffic Control Section', 'රිය නියාමක කණ්ඩායම'],
        ['mass', 'Mass Media Circle', 'ජානමාධය සංගමය'],
        ['general', 'General Knowledge Society', 'දැනුම් මිනුම සංගමය'],
        ['buddhist', 'Buddhist Society', 'බෞද්ධ සංගමය'],
        ['science', 'Science Society', 'විද්‍යා සංගමය'],
        ['computer', 'Computer Society', 'පරිගණක සංගමය'],
      ]
    },
    'p4-3': {
      key: 'monitor',
      questions: ['Have you been a monitor or a prefect?', 'ඔබ පන්ති නායකයා හෝ ශිෂ්‍ය නායකයා වී තිබේද ?'],
      options: [{name: ['grade 6', '6 ශ්‍රේණියට'], key: 'g6'},
        {name: ['grade 7', '7 ශ්‍රේණියට'], key: 'g7'},
        {name: ['grade 8', '8 ශ්‍රේණියට'], key: 'g8'}
        ]
    },

    'qlt-1' : {
      questions: ['I learn every subject matter related to an assignment before moving on to do it.',
        'ඔබ පැවරුමක් කිරීමට පෙර එයට අදාල විෂය කරුණු සියල්ල අධ්‍යනය කරයි.'],
      type: 's',
      qNumber: '1',
    },
    'qlt-2' : {
      questions: ['I learn a subject by reading the provided textbook.',
        'ඔබ විෂයක්  අධ්‍යනය කරන්නේ එයට අදාල පෙළපොත කියවීමෙනි.'],
      type: 'p',
      qNumber: '2',
    },
    'qlt-3' : {
      questions: ['I like to build things such as circuits, toys, crafts, tools etc on my own.',
        'ඔබ පරිපථ, උපකරණ, සෙල්ලම් බඩු හෝ පරිගණක ආශ්‍රිත නිර්මාණ ආදිය තනිවම ගොඩනැගීමට කැමැත්තක් දක්වයි.'],
      type: 't',
      qNumber: '3',
    },
    'qlt-4' : {
      questions: ['I become frustrated when someone give directions on what to do regarding a assignment.',
        'ඔබ පැවරුමක් කරනවිට යම් අයෙක් ඔබ කරනා පැවරුම පිලිබඳ උපදෙස් දුන්නහොත්, ඔබ එයට අකමැත්තක් දක්වයි.'],
      type: 'c',
      qNumber: '4',
    },
    'qlt-5' : {
      questions: ['I become frustrated when you have to change what you are doing during an assignment.',
        'ඔබ පැවරුමක් කරමින් සිටින අතරතුරේදී, ඔබ මෙතෙක් වෙලාවක් සිදුකල දේවල් වෙනස් කිරීමට සිදුවුවහොත්, ඔබ එයට අකමැත්තක් දක්වයි.'],
      type: 's',
      qNumber: '5',
    },
    'qlt-6' : {
      questions: ['I keep detailed notes for every subject. (more than the notes teacher tells you to write)',
        'ඔබ, සෑම විෂයකටම, ගුරුතුමා ලබාදෙන සටහන් වලට අමතර විෂය කරුණු සහිත සටහනක් පිළියෙළ කරයි.'],
      type: 'p',
      qNumber: '6',
    },
    'qlt-7' : {
      questions: ['I like the challenge of building things such as circuits, toys, crafts, tools, devices etc.',
        'ඔබ, පරිපථ, උපකරණ, සෙල්ලම් බඩු හෝ පරිගණක ආශ්‍රිත නිර්මාණ ආදිය තනිවම ගොඩනැගීමේදී මුහුණදීමට සිදුවන අභියෝගයට කැමැත්තක් දක්වයි.'],
      type: 't',
      qNumber: '7',
    },
    'qlt-8' : {
      questions: ['I don’t like to do things as others say because I like to do in my own way.',
        'ඔබ ඔබගේම ක්‍රමයකට කටයුතු කිරීමට කැමත්තක් දක්වන නිසා ඔබ අනෙක් අයගේ උපදෙස් වලට අනුව යමක් කිරීමට අකමැත්තක් දක්වයි.'],
      type: 'c',
      qNumber: '8',
    },
    'qlt-9' : {
      questions: ['I clean up my table and put the books where it should be kept after studying.',
        'ඔබ පාඩම් කිරීමෙන් අනතුරුව, මේසය පිළිවෙලට සකස් කර, පොත්පත් නියමිත තැන් වලින් තබයි.'],
      type: 's',
      qNumber: '9',
    },
    'qlt-10' : {
      questions: ['I like to write notes, essays and reports etc.',
        'ඔබ රචනා, වාර්තා සහ සටහන් ලිවීමට කැමතියි.'],
      type: 'p',
      qNumber: '10',
    },
    'qlt-11' : {
      questions: ['I like to figure out how machines, devices or computers work.',
        'ඔබ නොයෙකුත් උපකරණ සහ පරිගණක ආදිය ක්‍රියාත්මක වන ආකාරය අධ්‍යනය කිරීමට කැමැත්තක් දක්වයි.'],
      type: 't',
      qNumber: '11',
    },
    'qlt-12' : {
      questions: ['I try to answer questions quickly without organizing or thinking through what you know.',
        'ඔබ විභාගයකදී, කරුණු නිසි පරිදි ගොණු කිරීමකින් තොරව, ඉක්මනින් පිළිතුරු සැපයීමට උත්සාහ දරයි.'],
      type: 'c',
      qNumber: '12',
    },
    'qlt-13' : {
      questions: ['I plan things before I start my school work.',
        'ඔබ පාසල් වැඩ කිරීමට පෙර සැලැස්මක් සකසා ගනියි.'],
      type: 's',
      qNumber: '13',
    },
    'qlt-14' : {
      questions: ['I ask questions from teacher during the class when something is unclear.',
        'ඔබ පාඩම අතරතුර යමක් අපැහැදිලිවූ විට, ගුරුතුමාගෙන් ප්‍රශ්න අසයි.'],
      type: 'p',
      qNumber: '14',
    },
    'qlt-15' : {
      questions: ['I like to involve in practical sessions rather than listening to lessons.',
        'ඔබ පාඩම් වලට සහභාගී වීමට වඩා ප්‍රයෝගික පරීක්ෂණ යනාදිය සඳහා සහභාගී වීමට කැමැත්තක් දක්වයි.'],
      type: 't',
      qNumber: '15',
    },
    'qlt-16' : {
      questions: ['I got lots of unique, creative ideas which I would like to work on.',
        'ඔබ සතුව නොයෙකුත් ආවේණික සහ නිර්මාණශීලි අදහස් පවතී.'],
      type: 'c',
      qNumber: '16',
    },
    'qlt-17' : {
      questions: ['I usually double check my answers after completing an examination.',
        'ඔබ විභාගයකදී කාලය ඉතුරු වූ විට, ලබාදුන් පිළිතුරු නැවතත් පරීක්ෂා කරයි.'],
      type: 's',
      qNumber: '17',
    },
    'qlt-18' : {
      questions: ['I memorize facts in the textbook and notebook when studying a subject.',
        'ඔබ විෂයක් පාඩම් කරන විට, පෙළ පොතේ සහ සටහන් පොතේ ඇති විෂය කරුණු කටපාඩම් කරයි.'],
      type: 'p',
      qNumber: '18',
    },
    'qlt-19' : {
      questions: ['I like to take apart toys, machines and computers to figure out how they work.',
        'ඔබ විවිධ උපකරණ, සෙල්ලම් බඩු සහ පරිගණක ආදියෙහි ඇතුලත පරික්ෂා කර ඒවා ක්‍රියාත්මක වන ආකාරය අධ්‍යනය කිරීමට උත්සහ දරයි.'],
      type: 't',
      qNumber: '19',
    },
    'qlt-20' : {
      questions: ['I like the risk of trying out new ways when doing my work.',
        'ඔබ ක්‍රියාකාරකමක් කිරීමේදී, අලුත් දේවල් අත්හදා බැලීමේ අවධානම ගැනීමට කැමැත්තක් දක්වයි.'],
      type: 'c',
      qNumber: '20',
    },
    'qlt-options' : [
      {key: '1', name: ['never ever', 'කිසිසේත් අදාල නොවේ']},
      {key: '2', name: ['almost never', 'අදාල නොවේ']},
      {key: '3', name: ['sometimes', 'සමහරවිට අදාලවේ']},
      {key: '4', name: ['almost always', 'අදාලවේ']},
      {key: '5', name: ['always', 'සෑමවිටම අදාලවේ']},
    ]
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

  startAgain() {
    this.page = 0;
    this.fullAnswer = {};
  }

}
