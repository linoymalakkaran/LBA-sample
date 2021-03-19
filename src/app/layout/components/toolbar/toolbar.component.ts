import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as _ from 'lodash';

import { AtlpConfigService } from '@atlp/services/config.service';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';
import { IconsService } from '@atlp/services/icons.service';
import { AtlpNavigationService } from '@atlp/components/navigation/navigation.service';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { AtlpAnimations } from '@atlp/animations';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: AtlpAnimations
})

export class ToolbarComponent implements OnInit, OnDestroy {
    SidebarName = SidebarName;
    horizontalNavbar: boolean;
    rightNavbar: boolean;
    hiddenNavbar: boolean;
    languages: any;
    selectedLanguage: any;
    sideBarShow: boolean;
    currentNavigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AtlpConfigService} _atlpConfigService
     * @param {AtlpSidebarService} _atlpSidebarService
     * @param {AtlpNavigationService} _atlpNavigationService
     * @param {IconsService} _iconsService
     * @param {TranslateService} _translateService
     */
    constructor(
        private _atlpConfigService: AtlpConfigService,
        private _atlpNavigationService: AtlpNavigationService,
        private _atlpSidebarService: AtlpSidebarService,
        private _iconsService: IconsService,
        private _translateService: TranslateService,
        private readonly router: Router,
    ) {
        // Set the defaults
        this.sideBarShow = true;
        this._iconsService.registerIcons(this.icons);
        this.languages = [
            {
                id: 'en',
                title: 'English',
                flag: 'us'
            },
        ];

        // Get current navigation
        const navigationList = this._atlpNavigationService.getCurrentNavigation();
        this.router.events
        .pipe(
          filter( (event: RouterEvent) => event instanceof NavigationEnd),
        ).subscribe( (event: RouterEvent) => {
            this.currentNavigation = this._atlpNavigationService.getNavigationItem( event.url.slice(1), navigationList);
        });
       
        
        // console.log(this.currentNavigation);


        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to the config changes
        this._atlpConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((settings) => {
                this.horizontalNavbar = settings.layout.navbar.position === 'top';
                this.rightNavbar = settings.layout.navbar.position === 'right';
                this.hiddenNavbar = settings.layout.navbar.hidden === true;
            });

        // Set the selected language from default languages
        this.selectedLanguage = _.find(this.languages, { id: this._translateService.currentLang });
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

    /**
     * Search
     *
     * @param value
     */
    search(value): void {
        // Do your search here...
        console.log(value);
    }

    /**
     * Set the language
     *
     * @param lang
     */
    setLanguage(lang): void {
        // Set the selected language for the toolbar
        this.selectedLanguage = lang;

        // Use the selected language for translations
        this._translateService.use(lang.id);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Register icon for current component
     */
    private get icons(): Array<string> {
        return ['arrow-open', 'open-table-icon', 'filter-icon', 'arrow-close', 'plus-white', 'question', 'notification', 'burger-menu'];
    }
}
