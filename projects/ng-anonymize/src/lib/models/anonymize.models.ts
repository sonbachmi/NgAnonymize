/* Default settings exposed for readonly query
Todo: allow consumer to set these
 */
export const AnonymizeDefaultValues = {
  PhoneCcLength: 3,
  MaskChar: '*',
  LeftReveal: 3,
  RightReveal: 4
};

/* Enum list of implemented anonymization method names.
For more details, see documentation
 */
export enum AnonymizeMethod {
  Randomize = 'randomize', // Randomize, character class aware
  Shuffle = 'shuffle',     // Shuffle, character class aware
  First = 'first',       // Reveal only x first characters
  Last = 'last'        // Reveal only x last characters
}

/* Method metadata exposed for convenience
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

export enum AnonymizeDataType {
  Phone = 'phone'
}

/* Anonymization behavior settings
Used by AnonymizePipe
*/
export type AnonymizeOptions = {
  bleed?: number,         // Number of characters to reveal for masking methods
  mask?: string,          // Replacement character to use as mask
  type?: AnonymizeDataType;   // Input data type
};
