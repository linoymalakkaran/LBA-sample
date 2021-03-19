import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { IconsService } from '@atlp/services/icons.service';
import { Subject } from 'rxjs';

// select interface
interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.scss']
})
export class NewAppointmentComponent implements OnInit, OnDestroy, OnChanges {
  @Input() awbData;
  @Input() driverData;
  public typeFiles = ['pdf', 'jpg', 'jpeg', 'png', 'mp4', 'css'];

  // build details
  public airWayDetails = [
    {
      id: 1,
      time: '02 D: 04HR: 59MIN',
      terminal: 'CTR',
      grossWeight: '100KG',
      chargeableWeight: '100KG',
      status: 'Cleared'
    },
    // {
    //   id: 2,
    //   time: '02 D: 04HR: 59MIN',
    //   terminal: 'CTR',
    //   grossWeight: '200KG',
    //   chargeableWeight: '2000KG',
    //   status: 'Cleared'
    // },
    // {
    //   id: 4,
    //   time: '02 D: 04HR: 59MIN',
    //   terminal: 'CTR',
    //   grossWeight: '200KG',
    //   chargeableWeight: '2000KG',
    //   status: 'Cleared'
    // },
    // {
    //   id: 5,
    //   time: '02 D: 04HR: 59MIN',
    //   terminal: 'CTR',
    //   grossWeight: '200KG',
    //   chargeableWeight: '2000KG',
    //   status: 'Cleared'
    // },
  ];

  public driverDetails = [
    {
      id: 10,
      name: 'Sonail Peter',
      contact: '+97123423056',
      vehicle: 'Lorem Ipsum',
      vehicleType: 'Lorem Ipsum'
    },
    // {
    //   id: 11,
    //   name: 'Sonail Peter',
    //   contact: '+97123423056',
    //   vehicle: 'Lorem Ipsum',
    //   vehicleType: 'Lorem Ipsum'
    // }
  ];

  @Output() changeState = new EventEmitter<SidebarName>();

  // Public
  newDriverFormOne: FormGroup;
  newDriverFormTwo: FormGroup;
  SidebarName = SidebarName;

  types: Type[] = [
    { value: 'type 1', viewValue: 'type 1' },
    { value: 'type 1', viewValue: 'type 1' },
    { value: 'type 1', viewValue: 'type 1' }
  ];

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   * @param {Router} _router
   * @param {FormBuilder} _formBuilder
   * @param {IconsService} _iconsService
   * @param {AtlpSidebarService} _atplSidebarService
   */
  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _iconsService: IconsService,
    private _atplSidebarService: AtlpSidebarService
  ) {
    // initial Form
    this.initialDriverFormOne();
    this.initialDriverFormTwo();

    // mat icon
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
   * On changes
   */
  ngOnChanges(): void {
    this.addNewItem();
    this.addNewDriver();
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
   * Delete need item 
   * @param id - type number
   */
  public removeDetailsItem(id): void {
    console.log(id);
    
    this.airWayDetails = this.airWayDetails.filter((item) => item.id !== id);
  }

  // loadedFiles
  public loadedFiles(files): void {
    console.log('loadedFiles', files);
  }

  // open to components
  openSidebarComponents(key): void {
    this.changeState.emit(key);
  }

  /**
   * Add new item
   */
  public addNewItem(): void {
    if(this.awbData === null || this.awbData === undefined) return;
    this.awbData.forEach(item => {
      if (!this.airWayDetails.includes(item)) {
        this.airWayDetails.push(item);
      } else {
        return;
      }
    });
  }
  public addNewDriver(): void {
    if(this.driverData === null || this.driverData === undefined) return;
    this.driverData.forEach(item => {
      if (!this.driverDetails.includes(item)) {
        this.driverDetails.push(item);
      } else {
        return;
      }
    });
  }

  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._atplSidebarService.getSidebar(key).toggleOpen();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  private initialDriverFormOne(): void {
    this.newDriverFormOne = this._formBuilder.group({
      'driver_name': ['', [Validators.required]],
      'driver_contact': ['', [Validators.required]],
      'vehicle_number': ['', [Validators.required]],
      'vehicle_type': ['', [Validators.required]],
    });
  }
  private initialDriverFormTwo(): void {
    this.newDriverFormTwo = this._formBuilder.group({
      'regular_slot': ['', [Validators.required]],
      'appointment_date': ['', [Validators.required]],
      'appointment_time': ['', [Validators.required]],
      'credit': ['', [Validators.required]],
    });
  }

  /**
   * Register icon for current component
   */
  private get icons(): Array<string> {
    return ['time-icon', 'data-icon-white', 'info-icon', 'pdf-icon', 'file-remove', 'folder'];
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
}
