import {Injectable} from '@angular/core';
import {FieldBase} from '../questions/field-base';
import {DropdownField} from '../questions/field-dropdown';
import {TextboxField} from '../questions/field-textbox';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class QuestionsService {
  private pages: Array<any> = [];
  private openType = '';

  constructor(private http: HttpClient) {
  }

  loadQuestions() {
    this.http.get('assets/questions.config.json').subscribe(data => {
      data['pages'].forEach(p => {
        console.log(p);
        const newPage = {
          pageHeader: p['pageHeader'],
          questions: [],
        };
        p['questions'].forEach(q => {
          let newQuestion: FieldBase<any>;
          switch (q['field-type']) {
            case 'drop-down':
              newQuestion = new DropdownField({
                key: q['key'],
                label: q['label'],
                order: q['order']
              });
              const quesOptions = [];
              q['options'].forEach(opt => {
                quesOptions.push({
                  key: opt['key'],
                  value: opt['value']
                })
              });
              newQuestion['options'] = quesOptions;
              break;
            case 'text-box':
              newQuestion = new TextboxField({
                key: q['key'],
                label: q['label'],
                value: q['value'],
                required: q['required'],
                order: q['order'],
                type: q['type'],
              });
              break;
          }
          newPage.questions.push(newQuestion);
        });
        this.pages.push(newPage);
      });
    });
  }

  public getPages(): FieldBase<any>[] {
    return this.pages;
  }

  public setOpenType(input: string): void {
    this.openType = input;
  }
}
