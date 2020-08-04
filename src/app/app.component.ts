import { Component } from '@angular/core';
import Prism from 'prismjs';
import {AnonymizeDefaultValues, AnonymizeMethods} from 'ng-anonymize';

// tslint:disable-next-line:no-unused-expression
Prism;  // Dummy code to prevent tree-shaking

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./home.css', './app.component.css']
})
export class AppComponent {
  methods = AnonymizeMethods;
  leftBleed = AnonymizeDefaultValues.LeftReveal;
  rightBleed = AnonymizeDefaultValues.RightReveal;
  inputData = 'John Doe';

  constructor() {
  }
}
