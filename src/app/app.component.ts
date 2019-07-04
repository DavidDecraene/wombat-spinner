import { Component, ViewEncapsulation } from '@angular/core';
import { environment } from '../environments/environment';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  spinner1Active = true;

  get version() {
    return environment.version;
  }

  constructor() {
  }
}
