import { Component } from '@angular/core';
// import {AnonymizeMethods, DEFAULT_LEFT_BLEED, DEFAULT_RIGHT_BLEED} from "./models/anonymize.models";
import Prism from 'prismjs';

Prism;  // Dummy code to prevent tree-shaking

export const PHONE_CC_LENGTH = 3;
export const DEFAULT_MASK_CHAR = '*';
export const DEFAULT_LEFT_BLEED = 3;
export const DEFAULT_RIGHT_BLEED = 4;

/* List of implemented anonymization methods.
For more details, see documentation
 */
export enum AnonymizeMethod {
  Randomize = 'randomize', // Randomize, character class aware
  Shuffle = 'shuffle',     // Shuffle, character class aware
  First = 'first',       // Reveal only x first characters
  Last = 'last'        // Reveal only x last characters
}

/* Method metadata for internal use only
*/
export const AnonymizeMethods = [
  {
    name: AnonymizeMethod.Randomize,
    label: 'Randomize'
  },
  {
    name: AnonymizeMethod.Shuffle,
    label: 'Shuffle'
  },
  {
    name: AnonymizeMethod.First,
    label: 'First'
  },
  {
    name: AnonymizeMethod.Last,
    label: 'Last'
  },
];

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
