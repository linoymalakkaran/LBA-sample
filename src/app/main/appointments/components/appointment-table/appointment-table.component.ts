import { SelectionModel } from "@angular/cdk/collections";
import {
  AfterViewInit,
  Component,
  ViewChild,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { SidebarName } from "app/core/enums/sidebar-name.enum";
import { IconsService } from "@atlp/services/icons.service";
import { PeriodicElement, Sort } from "../../models/Appointment.models";
import { displayedColumns, ELEMENT_DATA, sorts } from "../../helper/dmmy.data";
import { Observable, Subscription } from "rxjs";
import { select, Store } from "@ngrx/store";
import { ToastrService } from "ngx-toastr";
import {
  selectAppointmentData,
  selectAppointmentDataError,
  selectAppointmentDataLoading,
  selectAppointmentDataRefresh,
  selectAppointmentDataDeleted,
} from "../../store/appointment.selector";
import * as fromAppointmentState from "../../store/appointment.state";
import { IAppState } from "app/store/state/app.state";
import * as fromAppointmentAction from "../../store/appointment.action";
import {
  DataDescriptor,
  Ifilter,
  Iorder,
  Ipagination,
} from "../../models/data-descriptor.model";
import { AtlpSidebarService } from "@atlp/components/sidebar/sidebar.service";
import { appointTableSearchbyOptions } from "../../models/appointment.filter.model";

@Component({
  selector: "appointments-table",
  templateUrl: "./appointment-table.component.html",
  styleUrls: ["./appointment-table.component.scss"],
})
export class AppointmentTableComponent
  implements AfterViewInit, OnInit, OnDestroy {
  @Output() changeState = new EventEmitter<SidebarName>();
  subscriptions: Subscription[] = [];
  selection = new SelectionModel<PeriodicElement>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  sorts: Sort[] = sorts;
  displayedColumns: string[] = displayedColumns;
  order: Iorder = { orderBy: "CreatedDate", orderType: "desc" };
  filter: Ifilter[] = [];
  pagination: Ipagination = { pageIndex: 1, pageSize: 15 };
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  totalItemCount = 15;
  SidebarName = SidebarName;
  showFilters: boolean; 
  appliedfilters = [
    'Accepted',
  ];
  typeViewBasic: boolean;

  constructor(
    private _iconsService: IconsService,
    private appointmentstore$: Store<fromAppointmentState.IAppointmentTableState>,
    private store: Store<IAppState>,
    private toaster: ToastrService,
    private _atplSidebarService: AtlpSidebarService
  ) {
    this._iconsService.registerIcons(this.icons);
    this.showFilters = true;
    this.typeViewBasic = false;
  }

  getAppointmentData$: Observable<any> = this.appointmentstore$.pipe(
    select(selectAppointmentData)
  );
  getAppointmentDataLoading$: Observable<boolean> = this.appointmentstore$.pipe(
    select(selectAppointmentDataLoading)
  );
  getAppointmentDataError$: Observable<string> = this.appointmentstore$.pipe(
    select(selectAppointmentDataError)
  );
  getAppointmentDataRefresh$: Observable<boolean> = this.appointmentstore$.pipe(
    select(selectAppointmentDataRefresh)
  );
  DeleteAppointmentDataCompleted$: Observable<string> = this.appointmentstore$.pipe(
    select(selectAppointmentDataDeleted)
  );

  ngOnInit(): void {
    // this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
    this.dataSource = new MatTableDataSource<PeriodicElement>([]);
    this.getData();
    this.initSubscriptions();
  }

  private initSubscriptions(): void {
    this.subscriptions.push(
      this.getAppointmentDataLoading$.subscribe((loading) => {
        if (loading) {
        }
      })
    );
    this.subscriptions.push(
      this.getAppointmentDataRefresh$.subscribe((isRefresh) => {
        if (isRefresh) {
          this.getData();
          this.store.dispatch(
            new fromAppointmentAction.RefreshAppointmentTableData(false)
          );
        }
      })
    );

    this.subscriptions.push(
      this.getAppointmentDataError$.subscribe((error) => {
        if (error) {
          this.toaster.error(error);
        }
      })
    );

    this.subscriptions.push(
      this.getAppointmentData$.subscribe((data) => {
        if (data) {
          this.dataSource = new MatTableDataSource<PeriodicElement>(data);
          this.totalItemCount = data.totalItemCount;
        }
      })
    );

    this.subscriptions.push(
      this.DeleteAppointmentDataCompleted$.subscribe((fileId) => {
        if (fileId) {
          this.dataSource = new MatTableDataSource<PeriodicElement>([
            ...this.dataSource.data.filter((x) => x.type !== fileId),
          ]);
          this.totalItemCount = this.totalItemCount - 1;
          this.appointmentstore$.dispatch(
            new fromAppointmentAction.DeleteAppointmentDataCompleted(null)
          );
          this.toaster.success(
            'Document and corresponding transactions deleted successfully"',
            "Delete File",
            { positionClass: "toast-top-right" }
          );
        }
      })
    );
  }

  getData(): void {
    const payload: DataDescriptor = {
      order: this.order,
      filter: this.filter,
      pagination: this.pagination,
    };

    this.appointmentstore$.dispatch(
      new fromAppointmentAction.GetAppointmentTableData(payload)
    );
  }

  private unsubcribes(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

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
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      row.flow + 1
    }`;
  }

  private get icons(): Array<string> {
    return ["plus-dark"];
  }

  search(value): void {
    console.log(value);
  }

  /**
   * open sidebar report from checked row
   */

   SearchbyOptions = appointTableSearchbyOptions;

  getRecord(row): void {
    this.changeState.emit(SidebarName.report);
  }

  toggleSidebarOpen(key): void {
    this._atplSidebarService.getSidebar(key).toggleOpen();
  }

  toggleFilters = (args: any): void => {
    // callback code here
    this.showFilters = !this.showFilters;
  }

  changeFilters = (filter: string): void => {
    if (filter !== '') {
      // callback code here
      if (this.appliedfilters.includes(filter)) {
        this.appliedfilters = this.appliedfilters.filter(elem => elem !== filter);
      }
      else {
        this.appliedfilters.push(filter);
      }
    }
  }

  clearfilters = (): void => {
    this.appliedfilters = [];
  }

  ngOnDestroy(): void {
    this.unsubcribes();
  }
}
