import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AtlpNavigationModule } from '@atlp/components';
import { AtlpSharedModule } from '@atlp/shared.module';
import { NavbarComponent } from './navbar.component';

import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,

        AtlpSharedModule,
        AtlpNavigationModule,

        SharedModule
    ],
    exports     : [
        NavbarComponent
    ]
})
export class NavbarModule
{
}
