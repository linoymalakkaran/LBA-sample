import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { delay, filter, take, takeUntil } from 'rxjs/operators';

import { AtlpConfigService } from '@atlp/services/config.service';
import { AtlpNavigationService } from '@atlp/components/navigation/navigation.service';
import { AtlpPerfectScrollbarDirective } from '@atlp/directives/atlp-perfect-scrollbar/atlp-perfect-scrollbar.directive';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { IconsService } from '@atlp/services/icons.service';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit, OnDestroy {
    // Public
    SidebarName = SidebarName;
    searchForm: FormGroup;
    atlpConfig: any;
    navigation: any;

    // Private
    private _atlpPerfectScrollbar: AtlpPerfectScrollbarDirective;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AtlpConfigService} _atlpConfigService
     * @param {AtlpNavigationService} _atlpNavigationService
     * @param {AtlpSidebarService} _atlpSidebarService
     * @param {IconsService} _iconsService
     * @param {Router} _router
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _atlpConfigService: AtlpConfigService,
        private _atlpNavigationService: AtlpNavigationService,
        private _atlpSidebarService: AtlpSidebarService,
        private _iconsService: IconsService,
        private _router: Router,
        private _formBuilder: FormBuilder
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
        this._iconsService.registerIcons(this.icons);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Directive
    @ViewChild(AtlpPerfectScrollbarDirective, { static: true })
    set directive(theDirective: AtlpPerfectScrollbarDirective) {
        if (!theDirective) {
            return;
        }

        this._atlpPerfectScrollbar = theDirective;

        // Update the scrollbar on collapsable item toggle
        this._atlpNavigationService.onItemCollapseToggled
            .pipe(
                delay(500),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this._atlpPerfectScrollbar.update();
            });

        // Scroll to the active item position
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                setTimeout(() => {
                    this._atlpPerfectScrollbar.scrollToElement('navbar .nav-link.active', -120);
                });
            }
            );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                if (this._atlpSidebarService.getSidebar(SidebarName.navbar)) {
                    this._atlpSidebarService.getSidebar(SidebarName.navbar).close();
                }
            }
            );

        // Subscribe to the config changes
        this._atlpConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.atlpConfig = config;
            });

        // Get current navigation
        this._atlpNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this._atlpNavigationService.getCurrentNavigation();
                // const item = this._atlpNavigationService.getNavigationItem();

            });
        console.log(this.navigation);

        // initialSearchForm
        this.initialSearchForm();
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void {
        this._atlpSidebarService.getSidebar(key).toggleOpen();
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    private initialSearchForm(): void {
        this.searchForm = this._formBuilder.group({
            'search': ['', [Validators.minLength(5)]],
        });
    }
    /**
     * Register icon for current component
     */
    private get icons(): Array<string> {
        return ['icon-close'];
    }
}
