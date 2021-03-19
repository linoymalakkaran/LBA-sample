import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false,},
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false,},
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false,},
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false,},
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false,},
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false,},
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false,},
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false,},
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false,},
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false,},
  { flow: 'l', type: 'DI', book: 'FAO..', container: 'REAS..', iso: '22G1', line: 'COS', info: '--', expiry: '29/08/2020', hold: '--', trip: 477312, selected: false,},
];

/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
@Component({
  selector: 'appointments-table',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements AfterViewInit {
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
}
