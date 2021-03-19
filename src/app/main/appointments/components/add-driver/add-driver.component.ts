import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IconsService } from '@atlp/services/icons.service';

// select interface
interface Type {
  value: string;
  viewValue: string;
}

export interface DriverPeriodicElement {
  id: string;
  DriverName: string;
  DriverContact: string;
  Vehicle: string;
  VehicleType: string;
  selected: boolean;
}

const ELEMENT_DATA: DriverPeriodicElement[] = [
  { id: '1', DriverName: 'Sonail Peter', DriverContact: '+97123423056', Vehicle: 'Lorem Ipsum', VehicleType: 'Lorem Ipsum', selected: false, },
  { id: '2', DriverName: 'Sonail Peter', DriverContact: '+97123423056', Vehicle: 'Lorem Ipsum', VehicleType: 'Lorem Ipsum', selected: false, },
  { id: '3', DriverName: 'Sonail Peter', DriverContact: '+97123423056', Vehicle: 'Lorem Ipsum', VehicleType: 'Lorem Ipsum', selected: false, },
  { id: '4', DriverName: 'Sonail Peter', DriverContact: '+97123423056', Vehicle: 'Lorem Ipsum', VehicleType: 'Lorem Ipsum', selected: false, },
  { id: '5', DriverName: 'Sonail Peter', DriverContact: '+97123423056', Vehicle: 'Lorem Ipsum', VehicleType: 'Lorem Ipsum', selected: false, },
  { id: '6', DriverName: 'Sonail Peter', DriverContact: '+97123423056', Vehicle: 'Lorem Ipsum', VehicleType: 'Lorem Ipsum', selected: false, },
  { id: '7', DriverName: 'Sonail Peter', DriverContact: '+97123423056', Vehicle: 'Lorem Ipsum', VehicleType: 'Lorem Ipsum', selected: false, },
  { id: '8', DriverName: 'Sonail Peter', DriverContact: '+97123423056', Vehicle: 'Lorem Ipsum', VehicleType: 'Lorem Ipsum', selected: false, },
];

@Component({
  selector: 'add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.scss']
})
export class AddDriverComponent implements OnInit {

  // select
  types: Type[] = [
    { value: 'type 1', viewValue: 'type 1' },
    { value: 'type 1', viewValue: 'type 1' },
    { value: 'type 1', viewValue: 'type 1' }
  ];

  displayedColumns: string[] = ['select', 'DriverName', 'DriverContact', 'Vehicle', 'VehicleType'];
  dataSource = new MatTableDataSource<DriverPeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<DriverPeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: DriverPeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.DriverName + 1}`;
  }
  SidebarName = SidebarName;

  /**
    * Constructor
    * @param {IconsService} _iconsService
    * @param {AtlpSidebarService} _atplSidebarService
    */
  constructor(
    private _iconsService: IconsService,
    private _atplSidebarService: AtlpSidebarService
  ) {
    this._iconsService.registerIcons(this.icons);
  }


  ngOnInit(): void {
  }

  /**
    * Toggle sidebar open
    *
    * @param key
    */
  toggleSidebarOpen(key): void {
    this._atplSidebarService.getSidebar(key).toggleOpen();
  }


  // on Mouseover row show select checkbox
  handleMouseOver(row) {
    const position = row.id;
    ELEMENT_DATA.map((data: any) => {
      if (data.id === position) {
        data.show = true;
        if (this.selection.isSelected(row)) {
          data.selected = true
        }
      }
    });
  }

  // on Mouseleave row hide select checkbox
  handleMouseLeave(row) {
    const position = row.id;
    ELEMENT_DATA.map((data: any) => {
      if (data.id === position) {
        data.show = false;
        if (this.selection.isSelected(row)) {
          data.selected = true
        }
      }
    });
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
    return ['close-white-icon', 'soc-icon'];
  }
}
