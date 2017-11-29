import {Component, Input} from '@angular/core';
import {FieldBase} from '../../../questions/field-base';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-questions-field',
  templateUrl: './questions-field.component.html',
  styleUrls: ['./questions-field.component.scss']
})
export class QuestionsFieldComponent {

  @Input() question: FieldBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
