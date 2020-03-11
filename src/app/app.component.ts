import { Component } from '@angular/core';
import {AnonymizeMethods, DEFAULT_LEFT_BLEED, DEFAULT_RIGHT_BLEED} from "./models/anonymize.models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  methods = AnonymizeMethods;
  inputData = 'John Doe';
  leftBleed = DEFAULT_LEFT_BLEED;
  rightBleed = DEFAULT_RIGHT_BLEED;
  constructor() {

  }
}
