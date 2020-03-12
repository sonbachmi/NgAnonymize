# NgAnonymize aka ng-anonymize
Data anonymization library using Angular

View demo at [Official Project Website](https://nganon.bachmi.com)

**Data Anonymization** is the process to encrypt or obfuscate sensitive data into a temporary representation that is unrecognizable from the original data, while still preserving certain statistical characteristics as close to the original as possible. The anonymized dataset can then still be processed as meaningful data, or stored and transmitted safely, without exposing the real data. Data anonymization is aimed to protect personal privacy and is required by certain data protection laws like GDPR.

_NgAnonymize_ is a small Angular 2+ library that offers basic anonymization functions for use in data applications where privacy protection is a concern. It was created as a result of relative few open source solutions that exist for this purpose.

Initially _NgAnonymize_ offers four anonymization methods (or algorithms) that should be sufficient for most basic usage, though extension has been planned. Note that these functions only operate on letters and numbers; other symbols are left as is.

- **Randomize** (default) replaces each character with a random value. This is not trivial, as care must be made to preserve similar characteristics: letter by letter only, keeping the same case, and number by number only. A special case is for phone numbers, where the first portion of the data (the country code) should be preserved.

- **Shuffle** randomly swaps positions of all characters. The same restrictions above also apply, regarding preserving characteristics and phone codes. This represents the most fidelity for the anonymized data as it preserves the set of data characters.

- **First** reveals only the first few characters, masking the rest. Suitable for postal addresses.

- **Last** reveals only the last few characters, masking the rest. Suitable for credit card numbers.

Get Started

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
      
You can also view source code of this page including the demo which is part of the projects, as an example of how to use the library.
