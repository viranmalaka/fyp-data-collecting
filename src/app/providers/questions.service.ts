import {Injectable} from '@angular/core';
import {FieldBase} from '../questions/field-base';
import {DropdownField} from '../questions/field-dropdown';
import {TextboxField} from '../questions/field-textbox';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class QuestionsService {

  constructor(private http: HttpClient) {
  }

  getQuestions(): Promise<any> {
    return new Promise(resolve => {
      const questions: FieldBase<any>[] = [];
      this.http.get('assets/questions.config.json').subscribe(data => {
        console.log(data);
        data['pages'][0]['questions'].forEach(q => {
          let newQuestion: FieldBase<any>;
          switch (q['field-type']) {
            case 'drop-down':
              newQuestion = new DropdownField({
                key: q['key'],
                label: q['label'][1],
                order: q['order']
              });
              const quesOptions = [];
              q['options'].forEach(opt => {
                quesOptions.push({
                  key: opt['key'],
                  value: opt['value'][1]
                })
              });
              newQuestion['options'] = quesOptions;
              break;
            case 'text-box':
              newQuestion = new TextboxField({
                key: q['key'],
                label: q['label'][1],
                value: q['value'],
                required: q['required'],
                order: q['order'],
                type: q['type'],
              });
              break;
          }
          questions.push(newQuestion);
        });
        resolve(questions);
      });
    });
  }
}
