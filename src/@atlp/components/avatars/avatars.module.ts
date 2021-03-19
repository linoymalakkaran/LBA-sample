import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AvatarsComponent } from './avatars.component';

@NgModule({
    declarations: [
        AvatarsComponent,
    ],
    imports: [
        CommonModule
    ],
    exports     : [
        AvatarsComponent
    ],
})
export class AvatarsModule
{
}
