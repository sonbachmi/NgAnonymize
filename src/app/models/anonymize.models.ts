export const PHONE_CC_LENGTH = 3;
export const DEFAULT_MASK_CHAR = '*';
export const DEFAULT_LEFT_BLEED = 3;
export const DEFAULT_RIGHT_BLEED = 4;

export enum AnonymizeMethod {
  Randomize = 'randomize', // Randomize, character class aware
  Shuffle = 'shuffle',     // Shuffle, character class aware
  First = 'first',       // Reveal only x first characters
  Last = 'last'        // Reveal only x last characters
}
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

export enum AnonymizeDataType {
  Phone = 'phone'
}

export type AnonymizeOptions = {
  bleed?: number,
  mask?: string,
  type?: AnonymizeDataType;
};
