import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { IconsService } from '@atlp/services/icons.service';

// select interface
interface Sort {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  flow: string;
  type: string;
  book: string;
  container: string;
  iso: string;
  line: string;
  info: string;
  expiry: string;
  hold: string;
  trip: number;
  selected: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false, },
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false, },
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false, },
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false, },
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false, },
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false, },
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false, },
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false, },
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false, },
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false, },
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false, },
];

/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
@Component({
  selector: 'appointments-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.scss']
})
export class AppointmentTableComponent implements AfterViewInit {

  @Output() changeState = new EventEmitter<SidebarName>();

  [x: string]: any;
  /**
   * Constructor
   * @param {IconsService} _iconsService
   */
  constructor(
    private _iconsService: IconsService
  ) {
    // mat icon
    this._iconsService.registerIcons(this.icons);
  }
  sorts: Sort[] = [
    { value: 'Sort', viewValue: 'Sort' },
    { value: 'Sort-1', viewValue: 'Sort 1' },
    { value: 'Sort-2', viewValue: 'Sort 2' }
  ];

  displayedColumns: string[] = ['select', 'flow', 'type', 'book', 'container', 'iso', 'line', 'info', 'expiry', 'hold', 'trip'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
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
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.flow + 1}`;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Register icon for current component
   */
  private get icons(): Array<string> {
    return ['plus-dark'];
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
   * open sidebar report from checked row
   */
  getRecord(row):void {
    this.changeState.emit(SidebarName.report);
  }
}
