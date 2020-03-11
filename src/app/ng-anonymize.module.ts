import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnonymizePipe } from './pipes/anonymize.pipe';

@NgModule({
    declarations: [AnonymizePipe],
    exports: [
        AnonymizePipe
    ],
    imports: [
        CommonModule
    ]
})
export class NgAnonymizeModule { }
