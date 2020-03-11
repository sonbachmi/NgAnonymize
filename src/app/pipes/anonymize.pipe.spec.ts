import {AnonymizePipe} from './anonymize.pipe';
import {AnonymizeMethod} from "../models/anonymize.models";

describe('AnonymizePipe', () => {
  it('create an instance', () => {
    const pipe = new AnonymizePipe();
    expect(pipe).toBeTruthy();
  });
  it('produce output same length as input', () => {
    const pipe = new AnonymizePipe();
    const input = 'abcdef';
    expect(pipe.transform(input).length).toEqual(input.length);
  });
  it('shuffle preserves character set', () => {
    const pipe = new AnonymizePipe();
    const input = 'abcdef';
    expect(Array.prototype.every.call(
      pipe.transform(input, AnonymizeMethod.Shuffle), o => input.indexOf(o) >= 0)).toBeTruthy();
  });
});

