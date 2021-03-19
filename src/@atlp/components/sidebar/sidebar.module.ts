import { NgModule } from '@angular/core';

import { AtlpSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        AtlpSidebarComponent
    ],
    exports     : [
        AtlpSidebarComponent
    ]
})
export class AtlpSidebarModule
{
}
