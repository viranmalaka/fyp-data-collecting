import { Component } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import {QuestionsService} from './providers/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public electronService: ElectronService, private qs: QuestionsService) {

    if (electronService.isElectron()) {
      this.qs.setOpenType('ele');
      // console.log('Mode electron');
      // Check if electron is correctly injected (see externals in webpack.config.js)
      // console.log('c', electronService.ipcRenderer);
      // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
      // console.log('c', electronService.childProcess);
    } else {
      this.qs.setOpenType('web');
      // console.log('Mode web');
    }
  }
}
