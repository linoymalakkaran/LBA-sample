import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AtlpConfigService } from '@atlp/services/config.service';
import { navigation } from 'app/navigation/navigation';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
@Component({
    selector     : 'layout',
    templateUrl  : './layout.component.html',
    styleUrls    : ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit, OnDestroy
{
    atlpConfig: any;
    navigation: any;
    SidebarName = SidebarName;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AtlpConfigService} _atlpConfigService
     */
    constructor(
        private _atlpConfigService: AtlpConfigService
    )
    {
        // Set the defaults
        this.navigation = navigation;

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
        // Subscribe to config changes
        this._atlpConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.atlpConfig = config;
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
