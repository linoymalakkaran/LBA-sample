import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AtlpSearchBarModule } from '@atlp/components';

import { AtlpSharedModule } from '@atlp/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports     : [
        RouterModule,
        AtlpSharedModule,
        CommonModule,
        AtlpSharedModule,
        SharedModule,
        AtlpSearchBarModule
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule
{
}
