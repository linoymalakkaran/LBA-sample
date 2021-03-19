import { NgModule } from '@angular/core';

import { AtlpIfOnDomDirective } from '@atlp/directives/atlp-if-on-dom/atlp-if-on-dom.directive';
import { AtlpInnerScrollDirective } from '@atlp/directives/atlp-inner-scroll/atlp-inner-scroll.directive';
import { AtlpPerfectScrollbarDirective } from '@atlp/directives/atlp-perfect-scrollbar/atlp-perfect-scrollbar.directive';
import { AtlpMatSidenavHelperDirective, AtlpMatSidenavTogglerDirective } from '@atlp/directives/atlp-mat-sidenav/atlp-mat-sidenav.directive';

@NgModule({
    declarations: [
        AtlpIfOnDomDirective,
        AtlpInnerScrollDirective,
        AtlpMatSidenavHelperDirective,
        AtlpMatSidenavTogglerDirective,
        AtlpPerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        AtlpIfOnDomDirective,
        AtlpInnerScrollDirective,
        AtlpMatSidenavHelperDirective,
        AtlpMatSidenavTogglerDirective,
        AtlpPerfectScrollbarDirective
    ]
})
export class AtlpDirectivesModule
{
}
