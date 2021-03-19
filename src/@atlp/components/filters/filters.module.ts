import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FiltersComponent } from './filters.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
    declarations: [
        FiltersComponent,
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports     : [
        FiltersComponent
    ],
})
export class FiltersModule { }
