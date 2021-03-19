import { Component, OnDestroy, OnInit } from '@angular/core';
import { AtlpProgressBarService } from '@atlp/components/progress-bar/progress-bar.service';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { IconsService } from '@atlp/services/icons.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit, OnDestroy {
  // sidebar
  SidebarName = SidebarName;
  lengthOpenSideBar: number;
  appointement = {
    reference: 4770766,
    trucknumber: 94252,
    paymentmode: 'Partial Payment (CREDIT)',
    paymentmethod: '---',
    paymentdate: 'dd/mm/yyyy',
    otherreference: '---',
    terminal: 'KHALIFA TERMINAL (ADT)',
    Timelapsed: '00.12.32',
  };
  file = [
    {
      Name: 'File name here',
      date: 'June 12, 2018 03:31:23',
      user: 'User Name'
    },
    {
      Name: 'File name here',
      date: 'June 12, 2018 03:31:23',
      user: 'User Name'
    },
  ];

  awbData = null;
  driverData = null;

  // Private
  private _unsubscribeAll: Subject<any>;

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
    this._atlpProgressBarService.setValue(50);
    this.lengthOpenSideBar = 0;

    // Set the buffer value
    // bufferValue: number
    this._atlpProgressBarService.setBufferValue(40);

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  public loadedFiles(files): void {
    console.log('loadedFiles', files);
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
    this.atplSidebarService.getSidebar(key).toggleOpen();
  }

  /**
   * Handle output data
   * @param data cheked item
   */
  checkedAwb(data): void {
    this.awbData = data;
  }
  checkedDriver(data): void {
    this.driverData = data;
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
