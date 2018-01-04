import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldBase} from '../../questions/field-base';
import {FieldControlService} from '../../questions/field-control.service';

@Component({
  selector: 'app-questions-form',
  templateUrl: './questions-form.component.html',
  styleUrls: ['./questions-form.component.scss']
})
export class QuestionsFormComponent implements OnInit {

  @Input() questions: FieldBase<any>[] = [];
  @Input() lan = 0;
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FieldControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
