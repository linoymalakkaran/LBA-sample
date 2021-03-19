import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VoyageCardComponent,VoyageInfoComponent } from './components';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        VoyageCardComponent,
        VoyageInfoComponent,
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatIconModule,
        FlexLayoutModule,

    ],
    exports     : [
        VoyageCardComponent,
        VoyageInfoComponent,
    ],
})
export class VoyageModule { }
