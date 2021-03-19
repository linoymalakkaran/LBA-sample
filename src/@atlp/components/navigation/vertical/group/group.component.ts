import { ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AtlpNavigationItem } from '@atlp/types';
import { AtlpNavigationService } from '@atlp/components/navigation/navigation.service';

@Component({
    selector   : 'atlp-nav-vertical-group',
    templateUrl: './group.component.html',
    styleUrls  : ['./group.component.scss']
})
export class AtlpNavVerticalGroupComponent implements OnInit, OnDestroy
{
    @HostBinding('class')
    classes = 'nav-group nav-item';

    @Input()
    item: AtlpNavigationItem;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     */

    /**
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {AtlpNavigationService} _atlpNavigationService
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _atlpNavigationService: AtlpNavigationService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to navigation item
        merge(
            this._atlpNavigationService.onNavigationItemAdded,
            this._atlpNavigationService.onNavigationItemUpdated,
            this._atlpNavigationService.onNavigationItemRemoved
        ).pipe(takeUntil(this._unsubscribeAll))
         .subscribe(() => {

             // Mark for check
             this._changeDetectorRef.markForCheck();
         });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}
