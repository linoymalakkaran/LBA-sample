import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppointmentsComponent } from "./appointments.component";

import { AtlpSharedModule } from "@atlp/shared.module";
import { SharedModule } from "app/shared/shared.module";
import { RouterModule } from "@angular/router";

import { AtlpSearchBarModule } from "@atlp/components";

import {
  AppointmentTableComponent,
  NewAppointmentComponent,
  AppointementChargesComponent,
  AppointementReportComponent,
  AppointmentFileComponent,
  AddAwbComponent,
  AddDriverComponent,
} from "./components";
import { AppointmentRoutingModule } from "./appointment-routing-module";
import { AppointmentService } from "./services/appointment.service";
import { AppointmenttableService } from "./services/appointmenttable.service";

@NgModule({
  declarations: [
    AppointmentsComponent,
    AppointmentTableComponent,
    NewAppointmentComponent,
    AppointementChargesComponent,
    AppointementReportComponent,
    AppointmentFileComponent,
    AddAwbComponent,
    AddDriverComponent,
  ],
  imports: [
    AppointmentRoutingModule,
    CommonModule,
    AtlpSharedModule,
    SharedModule,
    AtlpSearchBarModule,
  ],
  providers: [AppointmentService, AppointmenttableService],
})
export class AppointmentsModule {}
