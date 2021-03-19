import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtlpSharedModule } from '@atlp/shared.module';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AtlpSearchBarModule } from '@atlp/components';

import { 
  PaymentCheckoutComponent
} from './components';

import { PaymentComponent } from './payment.component';

const routes = [
  {
    path: '',
    component: PaymentComponent
  }
];

@NgModule({
  declarations: [
    PaymentComponent,
    PaymentCheckoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AtlpSharedModule,
    SharedModule,
    AtlpSearchBarModule
  ]
})
export class PaymentModule { }
