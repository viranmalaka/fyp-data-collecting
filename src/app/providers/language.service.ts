import {Injectable} from '@angular/core';

@Injectable()
export class LanguageService {
  language = 0;

  constructor() {
  }

  public setLanguage(i) {
    this.language = i;
  }
}
