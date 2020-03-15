import {AnonymizePipe} from './anonymize.pipe';
import {AnonymizeMethod, AnonymizeMethods, DEFAULT_MASK_CHAR} from "../models/anonymize.models";

/* Number of sample input strings to feed each test */
const SAMPLE_COUNT = 10;
/* Max reveal size to test masking methods  */
const MAX_BLEED = 10;

const methods = AnonymizeMethods;
const mask = DEFAULT_MASK_CHAR;

describe('AnonymizePipe', () => {
  let inputs: string[];
  let pipe: AnonymizePipe;
  beforeEach(() => {
    pipe = new AnonymizePipe();
    // Generate array of random alphanumeric strings
    inputs = [];
    for (let i = 0; i < SAMPLE_COUNT; i++) {
      inputs.push(Math.random().toString(36).substr(2, Math.round(6 + Math.random() * 14)));
    }
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('all methods output same length as input', () => {
    methods.forEach(method =>
      inputs.forEach(input =>
        expect(pipe.transform(input, method.name).length).toEqual(input.length))
    );
  });
  it('shuffle method preserves character set', () => {
    inputs.forEach(input =>
      expect(pipe.transform(input, AnonymizeMethod.Shuffle).split('')
        .every(c => input.indexOf(c) >= 0)).toBeTruthy());
  });
  it('left method reveals only x first chars and masks rest', () => {
      inputs.forEach(input => {
        for (let i=1; i<MAX_BLEED; i++) {
          const output = pipe.transform(input, AnonymizeMethod.First, { bleed: i});
          expect(output.substr(0, i).split('')
            .every(c => c !== mask)).toBeTruthy();
          expect(output.substr(i).split('')
            .every(c => c === mask)).toBeTruthy();
        }
      });
  });
  it('right method reveals only x last chars and masks rest', () => {
      inputs.forEach(input => {
        for (let i=1; i<MAX_BLEED; i++) {
          const output = pipe.transform(input, AnonymizeMethod.Last, { bleed: i});
          expect(output.substr(-i).split('')
            .every(c => c !== mask)).toBeTruthy();
          expect(output.substr(0, output.length-i).split('')
            .every(c => c === mask)).toBeTruthy();
        }
      });
  });
});

