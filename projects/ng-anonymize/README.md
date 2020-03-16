# NgAnonymize
Data anonymization library using Angular

View demo at [Official Project Website](https://nganon.bachmi.com)

**Data Anonymization** is the process to encrypt or obfuscate sensitive data into a temporary representation that is unrecognizable from the original data, while still preserving certain statistical characteristics as close to the original as possible. The anonymized dataset can then still be processed as meaningful data, or stored and transmitted safely, without exposing the real data. Data anonymization is aimed to protect personal privacy and is required by certain data protection laws like GDPR.

_NgAnonymize_ is a small Angular 2+ library that offers basic anonymization functions for use in data applications where privacy protection is a concern. It was created as a result of relative few open source solutions that exist for this purpose.

Initially _NgAnonymize_ offers out of the box four anonymization methods (or algorithms) that should be sufficient for most basic usage, though extension has been planned. Note that these functions only operate on letters and numbers; other symbols are left as is.

- **Randomize** (default) replaces each character with a random value. This is not trivial, as care must be made to preserve similar characteristics: letter by letter only, keeping the same case, and number by number only. A special case is for phone numbers, where the first portion of the data (the country code) should be preserved.

- **Shuffle** randomly swaps positions of all characters. In addition to the same restrictions above, care must be taken to preserve the pattern of the data, such as to make sure at a certain position, a letter is always replaced by a letter, and likewise for numbers and symbols. This represents the best fidelity for the anonymized data as it preserves the set of data characters.

- **First** reveals only the first few characters, masking the rest. Suitable for postal addresses.

- **Last** reveals only the last few characters, masking the rest. Suitable for credit card numbers.

## Get Started

Clone the project from GitHub, or install the NPM module into your Angular application.

`npm install ng-anonymize`

Import the module into your app module file:

    import {NgAnonymizeModule} from "ng-anonymize";

    imports: [
      ...
      NgAnonymizeModule,
      ...
    ];
      
Use the anonymize pipe to display anonymized data

      <div>
        {{ originalText | anonymize : [method?] : [options?] }}
      </div>
      
Typical example:

      <div>{{'John Doe' | anonymize:'shuffle'}}</div>
      
You can also use the function programmatically in code:

    import {AnonymizePipe} from 'ng-anonymize';
    
    const anonymize = new AnonymizePipe().transform;
    const outputData = anonymize(inputData, 'first', 
                { bleed: 4 } );

Either way, you can customize anonymization behavior by passing parameters as follows.

## Reference

The pipe accepts two optional parameters:

- **`method`**:` string` selects the anonymization method, can be either `'randomize'` (default), `'shuffle'`, `'first'` or `'last'`.

- **`options`**`: AnonymizePipeOptions` specifies additional settings in the following shape:

~~~~
    {
      bleed?: number,
      mask?: string,
      type?: string;
    }`
~~~~    

   -**`bleed`**: the number of characters to reveal for masking methods (`first` and `last`). Default values are 3 for `first` and 4 for `last`.

   -**`mask`**: the character to use as mask. Default is `*`.

   -**`type`**: specifies type of the data. Currently only one value is supported: `'phone'` treats input data as phone number and tries to preserve (does not transform) the country code (so it stays as valid data). Currently the logic is very simple and only preserves the first few characters. The default number of characters to keep is hard coded as 3. Todo: smarter anonymization of phone numbers.

This completes the documentation. You can also view source code of the project page including the demo which is part of the project, as an example of how to use the library.

Compatibility Notes: Support for Ivy coming soon. For now you likely need to disable Ivy to use the library.
