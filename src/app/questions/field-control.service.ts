import {Injectable} from '@angular/core';
import {FieldBase} from './field-base';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class FieldControlService {

  constructor() {
  }

  toFormGroup(questions: FieldBase<any>[]) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

}
