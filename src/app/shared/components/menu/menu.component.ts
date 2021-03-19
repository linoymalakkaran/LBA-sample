import { Component, OnDestroy, OnInit } from '@angular/core';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';
import { AtlpConfigService } from '@atlp/services/config.service';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { IconsService } from '@atlp/services/icons.service';
import * as _ from 'lodash';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  SidebarName = SidebarName;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {AtlpSidebarService} _atlpSidebarService
   * @param {IconsService} _iconsService
   */
  constructor(
      private _atlpSidebarService: AtlpSidebarService,
      private _atlpConfigService: AtlpConfigService,
      private _iconsService: IconsService,

  ) {
      // Set the defaults
      this._iconsService.registerIcons(this.icons);
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
  /**
   * Register icon for current component
   */
  private get icons(): Array<string> {
      return ['burger-menu'];
  }

}
