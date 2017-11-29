/**
 * Created by malaka on 11/29/17.
 */

import {FieldBase} from 'app/questions/field-base';

export class TextboxField extends FieldBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
