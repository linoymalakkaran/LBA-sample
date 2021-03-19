import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AtlpSidebarModule } from '@atlp/components';
import { AtlpSharedModule } from '@atlp/shared.module';

import { ContentModule } from 'app/layout/components/content/content.module';
import { FooterModule } from 'app/layout/components/footer/footer.module';
import { NavbarModule } from 'app/layout/components/navbar/navbar.module';
import { QuickPanelModule } from 'app/layout/components/quick-panel/quick-panel.module';
import { ToolbarModule } from 'app/layout/components/toolbar/toolbar.module';

import { LayoutComponent } from 'app/layout/layout.component';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports     : [
        RouterModule,
        AtlpSharedModule,
        AtlpSidebarModule,
        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        LayoutComponent,
    ]
})
export class LayoutModule
{
}
