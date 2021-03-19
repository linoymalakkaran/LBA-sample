import { NgModule } from '@angular/core';

import { AtlpCountdownComponent } from '@atlp/components/countdown/countdown.component';

@NgModule({
    declarations: [
        AtlpCountdownComponent
    ],
    exports: [
        AtlpCountdownComponent
    ],
})
export class AtlpCountdownModule
{
}
