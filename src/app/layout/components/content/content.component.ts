import { Component, ViewEncapsulation } from '@angular/core';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';
import { IconsService } from '@atlp/services/icons.service';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';

@Component({
    selector     : 'content',
    templateUrl  : './content.component.html',
    styleUrls    : ['./content.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContentComponent
{
    SidebarName = SidebarName;
    lengthOpenSideBar: number;
    /**
     * Constructor
     */
    constructor( private _iconsService: IconsService,
        public atplSidebarService: AtlpSidebarService)
    {
        this._iconsService.registerIcons(this.icons);
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
    this.atplSidebarService.getSidebar(key).toggleOpen();
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

        // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Register icon for current component
   */
  private get icons(): Array<string> {
    return ['close-white-icon', 'minimize-arrows', 'table-icon-two', 'table-icon-one', 'open-icon', 'plus-white', 'open-table-icon-active', 'open-table-icon', 'filter-icon', 'small-close-btn', 'soc-icon', 'download-icon', 'print-icon', 'credit-card-fill', 'back-arrow'];
  }
}
