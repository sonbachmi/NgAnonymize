/* Default settings exported for internal only
Todo: allow consumer to query or set these
 */
export const PHONE_CC_LENGTH = 3;
export const DEFAULT_MASK_CHAR = '*';
export const DEFAULT_LEFT_BLEED = 3;
export const DEFAULT_RIGHT_BLEED = 4;

/* Implemented anonymization methods.
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
