import { Component } from '@angular/core';
import {AnonymizeMethods, DEFAULT_LEFT_BLEED, DEFAULT_RIGHT_BLEED} from "./models/anonymize.models";
import Prism from 'prismjs';

Prism;  // Dummy code to prevent tree-shaking

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./home.css', './app.component.css']
})
export class AppComponent {
  methods = AnonymizeMethods;
  leftBleed = DEFAULT_LEFT_BLEED;
  rightBleed = DEFAULT_RIGHT_BLEED;
  inputData = 'John Doe';

  constructor() {
  }
}
