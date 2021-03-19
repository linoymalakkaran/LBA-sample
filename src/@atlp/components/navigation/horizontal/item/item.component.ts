import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector   : 'atlp-nav-horizontal-item',
    templateUrl: './item.component.html',
    styleUrls  : ['./item.component.scss']
})
export class AtlpNavHorizontalItemComponent
{
    @HostBinding('class')
    classes = 'nav-item';

    @Input()
    item: any;

    /**
     * Constructor
     */
    constructor()
    {

    }
}
