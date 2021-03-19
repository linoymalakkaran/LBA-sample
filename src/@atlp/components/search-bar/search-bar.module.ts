import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AtlpSearchBarComponent } from './search-bar.component';

@NgModule({
    declarations: [
        AtlpSearchBarComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        AtlpSearchBarComponent
    ]
})
export class AtlpSearchBarModule
{
}
