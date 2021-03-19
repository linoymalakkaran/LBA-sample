import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IconsService } from '@atlp/services/icons.service';
import { SidebarName } from 'app/core/enums/sidebar-name.enum';
import { AtlpSidebarService } from '@atlp/components/sidebar/sidebar.service';

@Component({
  selector: 'payment-checkout',
  templateUrl: './payment-checkout.component.html',
  styleUrls: ['./payment-checkout.component.scss']
})
export class PaymentCheckoutComponent implements OnInit {
  // public
  paymentForm: FormGroup;
  SidebarName = SidebarName;

  /**
   * Constructor
   * @param {AtlpSidebarService} _atplSidebarService
   * @param {FormBuilder} _formBuilder
   */
  constructor(
    private _iconsService: IconsService,
    private _atplSidebarService: AtlpSidebarService,
    private _formBuilder: FormBuilder
  ) {
    // mat icon
    this._iconsService.registerIcons(this.icons);
    // initial Form
    this.initialPaymentForm();
  }

  ngOnInit(): void {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  
  private initialPaymentForm(): void {
    this.paymentForm = this._formBuilder.group({
      'card_number': ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      'card_name': ['', [Validators.required]],
      'card_date': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      'card_cvv': ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    });
  }
  
  /**
   * Toggle sidebar open
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._atplSidebarService.getSidebar(key).toggleOpen();
  }
  
  /**
  * Register icon for current component
  */
  private get icons(): Array<string> {
    return ['pay-check', 'back-arrow'];
  }
}
