import {Pipe, PipeTransform} from '@angular/core';
import {AnonymizePipeOptions} from "./anonymize.pipe.model";
import {
  AnonymizeDataType,
  AnonymizeMethod,
  AnonymizeOptions,
  DEFAULT_LEFT_BLEED, DEFAULT_MASK_CHAR,
  DEFAULT_RIGHT_BLEED, PHONE_CC_LENGTH
} from "../models/anonymize.models";

const ALPHABET = 'abcdefghijjklmnopqrstuvwyz';
const lowerAlpha = ALPHABET.split('');
const upperAlpha = ALPHABET.toUpperCase().split('');
const nums = '0123456789'.split('');

@Pipe({
  name: 'anonymize',
  pure: true
})
export class AnonymizePipe implements PipeTransform {

  transform(value: string, method: AnonymizeMethod = AnonymizeMethod.Randomize, options?: AnonymizePipeOptions): string {
    if (!value) return '';
    const {type, mask = DEFAULT_MASK_CHAR, bleed} = options as AnonymizeOptions || {};

    switch (method) {
      case AnonymizeMethod.First:
        // Show only first x character
        return value.split('').map((c, index) => index < (bleed || DEFAULT_LEFT_BLEED) ? c : mask).join('');
      case AnonymizeMethod.Last:
        // Show only last x character
        return value.split('').map((c, index) => index >= value.length - (bleed || DEFAULT_RIGHT_BLEED) ? c : mask).join('');
      case AnonymizeMethod.Randomize:
        // Replace each character with random value of same character class
        return value.split('').map((c, index) => {
          const isLowerAlpha = lowerAlpha.indexOf(c) >= 0;
          const isUpperAlpha = upperAlpha.indexOf(c) >= 0;
          const isNum = nums.indexOf(c) >= 0;
          const charClass = isLowerAlpha ? lowerAlpha : isUpperAlpha ? upperAlpha : isNum ? nums : null;
          if (!charClass) return c;
          if (type === AnonymizeDataType.Phone) {
            if (index < PHONE_CC_LENGTH) return c;
          }
          return charClass[Math.floor(Math.random() * charClass.length)];
        }).join('');
      case AnonymizeMethod.Shuffle:
        const chars = value.split('');
        const shuffledAlpha = chars
          .filter(c => lowerAlpha.indexOf(c) >= 0 || upperAlpha.indexOf(c) >= 0).sort(() => 0.5 - Math.random());
        const shuffledNums = chars
          .filter(c => nums.indexOf(c) >= 0).sort(() => 0.5 - Math.random());
        return chars.map((c, index) => {
          const isLowerAlpha = lowerAlpha.indexOf(c) >= 0;
          const isUpperAlpha = upperAlpha.indexOf(c) >= 0;
          const isNum = nums.indexOf(c) >= 0;
          const charClass = isLowerAlpha ? lowerAlpha : isUpperAlpha ? upperAlpha : isNum ? nums : null;
          if (!charClass) return c;
          if (type === AnonymizeDataType.Phone) {
            if (index < PHONE_CC_LENGTH) return c;
          }
          let newChar = isNum ? shuffledNums.pop() : shuffledAlpha.pop();
          if (isUpperAlpha) newChar = newChar.toUpperCase();
          else if (isLowerAlpha) newChar = newChar.toLowerCase();
          return newChar;
        }).join('');
      default:
        return value || '';
    }
  }

}
