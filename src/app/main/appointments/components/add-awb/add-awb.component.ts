import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';

// select interface
interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'add-awb',
  templateUrl: './add-awb.component.html',
  styleUrls: ['./add-awb.component.scss']
})
export class AddAwbComponent implements OnInit {
  @Output() changeState = new EventEmitter<SidebarName>();
  @Output() data = new EventEmitter();
  // Public
  SidebarName = SidebarName;
  awbData = [
    {
      id: 6,
      time: '02 D: 04HR: 59MIN',
      terminal: 'CTR',
      grossWeight: '200KG',
      chargeableWeight: '2000KG',
      status: 'Cleared',
      checked: false
    },
    {
      id: 7,
      time: '02 D: 04HR: 59MIN',
      terminal: 'CTR',
      grossWeight: '200KG',
      chargeableWeight: '2000KG',
      status: 'Cleared',
      checked: false
    },
    {
      id: 8,
      time: '02 D: 04HR: 59MIN',
      terminal: 'CTR',
      grossWeight: '200KG',
      chargeableWeight: '2000KG',
      status: 'Cleared',
      checked: false
    }
  ];
  // select
  types: Type[] = [
    { value: 'type 1', viewValue: 'type 1' },
    { value: 'type 1', viewValue: 'type 1' },
    { value: 'type 1', viewValue: 'type 1' }
  ];

  /**
   * Constructor
   * @param {AtlpSidebarService} _atplSidebarService
   */
  constructor(
    private _atplSidebarService: AtlpSidebarService
  ) { }

  ngOnInit(): void {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Change status checked in awbData
   * @param id - type number
   */
  toggleAwb(id): void{
    this.awbData.map((item) => item.id === id ? item.checked = !item.checked : '');
    this.emitData();
  }

  /**
   * Emit checked item
   */
  emitData(): void {
    const checkedItem = this.awbData.filter((item) => item.checked !== false);
    this.data.emit(checkedItem);
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
   * Toggle sidebar open
   *
   * @param key
   */
  // openSidebarComponents(key): void {
  //   this._atplSidebarService.getSidebar(key).toggleOpen();
  // }

  // open to components
  openSidebarComponents(key): void {
    this.changeState.emit(key);
  }

  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._atplSidebarService.getSidebar(key).toggleOpen();
  }

}
