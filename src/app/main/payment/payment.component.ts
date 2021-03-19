import { Component, OnInit } from '@angular/core';
import { AtlpProgressBarService } from '@atlp/components/progress-bar/progress-bar.service';
import { IconsService } from '@atlp/services/icons.service';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';

@Component({
  selector: 'payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  nav_position: string = 'end';
  SidebarName = SidebarName;

  /**
   * Constructor
   * @param {IconsService} _iconsService
   * @param {AtlpProgressBarService} _atlpProgressBarService
   * @param {AtlpSidebarService} atplSidebarService
   */
  constructor(
    private _iconsService: IconsService,
    private _atlpProgressBarService: AtlpProgressBarService,
    public atplSidebarService: AtlpSidebarService
  ) {
    this._iconsService.registerIcons(this.icons);

    // Show the progress bar
    this._atlpProgressBarService.show();

    // Hide the progress bar
    //  this._atlpProgressBarService.hide();

    // Set the mode
    // mode: 'determinate' | 'indeterminate' | 'buffer' | 'query'
    this._atlpProgressBarService.setMode('determinate');

    // Set the value
    // value: number
    this._atlpProgressBarService.setValue(32);

    // Set the buffer value
    // bufferValue: number
    this._atlpProgressBarService.setBufferValue(32);
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
   
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  onTogglePosition(position: string) {
    this.nav_position = position === 'start' ? 'end' : 'start';
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
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this.atplSidebarService.getSidebar(key).toggleOpen();
  }

  /**
   * Register icon for current component
   */
  private get icons(): Array<string> {
    return ['close-white-icon', 'soc-icon', 'plus-white', 'open-table-icon', 'filter-icon', 'download-icon', 'folder'];
  }
  

}
