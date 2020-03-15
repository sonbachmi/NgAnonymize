import { NgModule } from '@angular/core';
import {AnonymizePipe} from "./pipes/anonymize.pipe";

@NgModule({
  declarations: [AnonymizePipe],
  imports: [
  ],
  exports: [AnonymizePipe]
})
export class NgAnonymizeModule { }
