import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[atlpWidgetToggle]'
})
export class AtlpWidgetToggleDirective
{
    /**
     * Constructor
     *
     * @param {ElementRef} elementRef
     */
    constructor(
        public elementRef: ElementRef
    )
    {
    }
}
