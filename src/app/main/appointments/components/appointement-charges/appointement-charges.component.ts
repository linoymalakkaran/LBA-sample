import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';

export interface PeriodicElement1 {
  flight: string;
  Mawb: number;
  Hawb: number;
  description: string;
  pcs: number;
  total: number;
  tax: number
  date: string;
  aoo: string;
  aod: string;
  Grwt: number;
  chwt: number;
  units: number;
  unitpcs: number;
  discount: number;
  discounttax: number;
  taxamount: number;
}

const ELEMENT_DATA: PeriodicElement1[] = [
  {
    flight: 'EY811', date: '05/02/2021', Mawb: 39029182898, Hawb: 39029182897, aoo: 'SFO', aod: 'AUH', Grwt: 1000, chwt: 1000, units: 10, unitpcs: 105, description: 'Delivery order', pcs: 10,
    discount: 0.00, discounttax: 5.00, taxamount: 152.00, tax: 52.00, total: 152.00
  },
  {
    flight: 'EY811', date: '05/02/2021', Mawb: 39029182898, Hawb: 39029182897, aoo: 'SFO', aod: 'AUH', Grwt: 1000, chwt: 1000, units: 10, unitpcs: 105, description: 'Delivery order', pcs: 10,
    discount: 0.00, discounttax: 5.00, taxamount: 152.00, tax: 52.00, total: 152.00
  },
  {
    flight: 'EY811', date: '05/02/2021', Mawb: 39029182898, Hawb: 39029182897, aoo: 'SFO', aod: 'AUH', Grwt: 1000, chwt: 1000, units: 10, unitpcs: 105, description: 'Delivery order', pcs: 10,
    discount: 0.00, discounttax: 5.00, taxamount: 152.00, tax: 52.00, total: 152.00
  },
];



export interface PeriodicElement2 {
  TariffID: number;
  Description: string;
  Qty: number;
  Rate: number;
  Amount: number;
  vat: number;
  vatrate: number;
  tax: number;
  total: number;
}

const ELEMENT_DATA2: PeriodicElement2[] = [
  { TariffID: 1787, Description: 'Appointement fee', Qty: 10, Rate: 105.00, Amount: 105.00, vat: 5.00, vatrate: 52.00, tax: 105.2, total: 110 },
  { TariffID: 1787, Description: 'Appointement fee', Qty: 10, Rate: 105.00, Amount: 105.00, vat: 5.00, vatrate: 52.00, tax: 105.2, total: 110 },
];

@Component({
  selector: 'appointement-charges',
  templateUrl: './appointement-charges.component.html',
  styleUrls: ['./appointement-charges.component.scss']
})
export class AppointementChargesComponent implements OnInit {
  displayedColumns: string[] = ['flight', 'Mawb', 'aoo', 'description', 'pcs', 'GRWT', 'units', 'discount', 'tax', 'total'];
  dataSource = new MatTableDataSource<PeriodicElement1>(ELEMENT_DATA);

  DueAmount: number = 152.00
  DueAmount2: number = 120.00
  TotalAmmount: number = 120.00

  displayedColumns2: string[] = ['TariffID', "Description", 'Qty', 'Rate', 'Amount', 'vat', 'vatrate', 'tax', 'total'];
  dataSource2 = new MatTableDataSource<PeriodicElement2>(ELEMENT_DATA2);

  SidebarName = SidebarName;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  
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
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._atplSidebarService.getSidebar(key).toggleOpen();
  }

}
