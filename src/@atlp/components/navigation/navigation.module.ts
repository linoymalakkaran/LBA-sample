import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { TranslateModule } from '@ngx-translate/core';

import { AtlpNavigationComponent } from './navigation.component';
import { AtlpNavVerticalItemComponent } from './vertical/item/item.component';
import { AtlpNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { AtlpNavVerticalGroupComponent } from './vertical/group/group.component';
import { AtlpNavHorizontalItemComponent } from './horizontal/item/item.component';
import { AtlpNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports     : [
        AtlpNavigationComponent
    ],
    declarations: [
        AtlpNavigationComponent,
        AtlpNavVerticalGroupComponent,
        AtlpNavVerticalItemComponent,
        AtlpNavVerticalCollapsableComponent,
        AtlpNavHorizontalItemComponent,
        AtlpNavHorizontalCollapsableComponent
    ]
})
export class AtlpNavigationModule
{
}
